export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

async function request(path, { method = 'GET', body, token, isFormData = false } = {}) {
  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;
  if (!isFormData && body) headers['Content-Type'] = 'application/json';

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: isFormData ? body : body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || `Request failed (${res.status})`);
  return data;
}

export const api = {
  register: (payload) => request('/api/auth/register', { method: 'POST', body: payload }),
  login: (payload) => request('/api/auth/login', { method: 'POST', body: payload }),
  me: (token) => request('/api/auth/me', { token }),

  listWebsites: (params = {}) => {
    const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v));
    return request(`/api/websites?${qs.toString()}`);
  },
  listCountries: () => request('/api/websites/countries'),

  // formData must contain: articleTitle, whatsapp, and optionally articleContent,
  // customWebsiteUrl, websiteIds (JSON string), facebook, linkedin, budgetRange, articleFile (File)
  createOrder: (formData, token) =>
    request('/api/orders', { method: 'POST', body: formData, token, isFormData: true }),

  listOrders: (token) => request('/api/orders', { token }),
  getOrder: (id, token) => request(`/api/orders/${id}`, { token }),

  listMessages: (orderId, token) => request(`/api/orders/${orderId}/messages`, { token }),
  sendMessage: (orderId, message, token) =>
    request(`/api/orders/${orderId}/messages`, { method: 'POST', body: { message }, token }),
};
