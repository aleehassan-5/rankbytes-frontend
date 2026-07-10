export default function ChatFab() {
  return (
    <button
      type="button"
      title="Live chat"
      onClick={() =>
        alert('Live chat would open here — connect your chat provider (e.g. Tawk.to, Crisp) to make this functional.')
      }
      className="animate-pulse-fab fixed bottom-6.5 right-6.5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-bright to-blue-deep text-[1.4rem] text-white shadow-[0_20px_48px_rgba(11,30,61,0.18)]"
    >
      💬
    </button>
  );
}
