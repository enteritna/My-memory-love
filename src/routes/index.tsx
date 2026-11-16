import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Love - Kho ảnh kỷ niệm" },
      { name: "description", content: "Kho ảnh kỷ niệm của hai đứa mình. Nhập mật khẩu để mở nhé ♡" },
      { property: "og:title", content: "My Love - Kho ảnh kỷ niệm" },
      { property: "og:description", content: "Kho ảnh kỷ niệm của hai đứa mình. Nhập mật khẩu để mở nhé ♡" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The page itself is the user's standalone HTML file served from /public.
function Index() {
  return (
    <iframe
      src="/my-love.html"
      title="My Love - Kho ảnh kỷ niệm"
      className="fixed inset-0 h-full w-full border-0"
      allow="autoplay; fullscreen"
    />
  );
}
