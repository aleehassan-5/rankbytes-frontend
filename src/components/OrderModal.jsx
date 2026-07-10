import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../api';

const fieldClass =
  'rounded-[9px] border-[1.5px] border-line bg-white px-3 py-2.75 text-[0.94rem] text-ink focus:border-blue-bright focus:outline-none focus:ring-3 focus:ring-blue-bright/15 w-full';
const labelClass = 'font-mono-label text-[0.78rem] font-semibold uppercase tracking-[0.03em] text-slate';

export default function OrderModal({ open, onClose, presetWebsiteId }) {
  const { token, user } = useAuth();

  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [authError, setAuthError] = useState('');
  const { login, register } = useAuth();

  const [form, setForm] = useState({
    articleTitle: '',
    articleContent: '',
    customWebsiteUrl: '',
    whatsapp: '',
    facebook: '',
    linkedin: '',
    budgetRange: '',
  });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);

  if (!open) return null;

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      if (authMode === 'login') {
        await login(authForm.email, authForm.password);
      } else {
        await register(authForm.name, authForm.email, authForm.password, authForm.phone);
      }
    } catch (err) {
      setAuthError(err.message);
    }
  };

  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    if (f && f.size > 10 * 1024 * 1024) {
      setError('File is larger than 10MB — please choose a smaller file.');
      e.target.value = '';
      return;
    }
    setError('');
    setFile(f || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.articleTitle) return setError('Article title is required.');
    if (!form.whatsapp) return setError('WhatsApp contact is required.');
    if (!presetWebsiteId && !form.customWebsiteUrl) {
      return setError('Enter a website URL you want us to place your article on.');
    }

    const data = new FormData();
    data.append('articleTitle', form.articleTitle);
    if (form.articleContent) data.append('articleContent', form.articleContent);
    if (presetWebsiteId) data.append('websiteIds', JSON.stringify([presetWebsiteId]));
    if (form.customWebsiteUrl) data.append('customWebsiteUrl', form.customWebsiteUrl);
    data.append('whatsapp', form.whatsapp);
    if (form.facebook) data.append('facebook', form.facebook);
    if (form.linkedin) data.append('linkedin', form.linkedin);
    if (form.budgetRange) data.append('budgetRange', form.budgetRange);
    if (file) data.append('articleFile', file); // <-- this is the actual upload

    setSubmitting(true);
    try {
      const res = await api.createOrder(data, token);
      setSuccess(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/50 px-4 py-8" onClick={onClose}>
      <div
        className="max-h-[90vh] w-full max-w-[560px] overflow-y-auto rounded-[22px] bg-white p-7 shadow-[0_20px_48px_rgba(11,30,61,0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-bold">Request a placement</h3>
          <button onClick={onClose} className="text-2xl leading-none text-slate hover:text-ink" aria-label="Close">
            ×
          </button>
        </div>

        {!user ? (
          <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3.5">
            <p className="text-sm text-slate">Log in or create an account first — orders are tied to your account so you can track them in live chat.</p>

            <div className="flex gap-2 rounded-full bg-tint p-1">
              <button type="button" onClick={() => setAuthMode('login')} className={`flex-1 rounded-full py-1.5 text-sm font-semibold ${authMode === 'login' ? 'bg-white shadow' : 'text-slate'}`}>Log in</button>
              <button type="button" onClick={() => setAuthMode('register')} className={`flex-1 rounded-full py-1.5 text-sm font-semibold ${authMode === 'register' ? 'bg-white shadow' : 'text-slate'}`}>Register</button>
            </div>

            {authMode === 'register' && (
              <input placeholder="Full name" className={fieldClass} value={authForm.name} onChange={(e) => setAuthForm((f) => ({ ...f, name: e.target.value }))} required />
            )}
            <input type="email" placeholder="Email" className={fieldClass} value={authForm.email} onChange={(e) => setAuthForm((f) => ({ ...f, email: e.target.value }))} required />
            <input type="password" placeholder="Password" className={fieldClass} value={authForm.password} onChange={(e) => setAuthForm((f) => ({ ...f, password: e.target.value }))} required />
            {authMode === 'register' && (
              <input placeholder="Phone (optional)" className={fieldClass} value={authForm.phone} onChange={(e) => setAuthForm((f) => ({ ...f, phone: e.target.value }))} />
            )}

            {authError && <p className="text-sm text-red-600">{authError}</p>}

            <button type="submit" className="rounded-full bg-gradient-to-br from-blue-bright to-blue-deep py-3 font-semibold text-white">
              {authMode === 'login' ? 'Log in' : 'Create account'}
            </button>
          </form>
        ) : success ? (
          <div className="flex flex-col gap-3 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tint text-2xl">✓</div>
            <h4 className="text-lg font-semibold">Order submitted</h4>
            <p className="text-sm text-slate">
              Live chat has opened for order <span className="font-mono-label">#{success.id.slice(0, 8)}</span>.
              Our team will manually verify your article and follow up there.
            </p>
            <button onClick={onClose} className="mt-2 rounded-full bg-gradient-to-br from-blue-bright to-blue-deep py-3 font-semibold text-white">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Article title</label>
              <input className={fieldClass} value={form.articleTitle} onChange={set('articleTitle')} required />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Article content (optional if uploading a file)</label>
              <textarea rows={4} className={fieldClass} value={form.articleContent} onChange={set('articleContent')} />
            </div>

            {/* --- the actual upload input --- */}
            <div className="flex flex-col gap-1.5">
              <label className={labelClass} htmlFor="articleFile">Upload article file</label>
              <input
                id="articleFile"
                type="file"
                accept=".doc,.docx,.pdf,.txt,.png,.jpg,.jpeg,.webp"
                onChange={handleFileChange}
                className="rounded-[9px] border-[1.5px] border-dashed border-line px-3 py-2.75 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-tint file:px-3 file:py-1.5 file:text-sm file:font-semibold"
              />
              {file && <p className="text-xs text-slate">{file.name} · {(file.size / 1024).toFixed(0)} KB</p>}
              <p className="text-xs text-slate">doc, docx, pdf, txt, png, jpg, webp — up to 10MB</p>
            </div>

            {!presetWebsiteId && (
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Website URL to place this on</label>
                <input placeholder="e.g. techcrunch.com" className={fieldClass} value={form.customWebsiteUrl} onChange={set('customWebsiteUrl')} />
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>WhatsApp</label>
                <input className={fieldClass} value={form.whatsapp} onChange={set('whatsapp')} required placeholder="+92 3xx xxxxxxx" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Budget range</label>
                <select className={fieldClass} value={form.budgetRange} onChange={set('budgetRange')}>
                  <option value="">Select</option>
                  <option>$5 – $100</option>
                  <option>$100 – $1,000</option>
                  <option>$1,000 – $3,000+</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Facebook (optional)</label>
                <input className={fieldClass} value={form.facebook} onChange={set('facebook')} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>LinkedIn (optional)</label>
                <input className={fieldClass} value={form.linkedin} onChange={set('linkedin')} />
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="mt-1 rounded-full bg-gradient-to-br from-blue-bright to-blue-deep py-3 font-semibold text-white disabled:opacity-60"
            >
              {submitting ? 'Submitting…' : 'Submit order'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
