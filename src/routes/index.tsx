import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ============ Data ============ */
const NAV = [
  { id: "hero", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "overview", label: "Hành trình" },
  { id: "projects", label: "Dự án" },
  { id: "evidence", label: "Minh chứng" },
  { id: "skills", label: "Kỹ năng" },
  { id: "conclusion", label: "Tổng kết" },
];

const MISSIONS = [
  { n: 1, icon: "📁", title: "Quản lý tệp và thư mục", desc: "Tổ chức dữ liệu học tập khoa học, đặt tên file nhất quán." },
  { n: 2, icon: "🔎", title: "Tìm kiếm & đánh giá thông tin", desc: "Sử dụng toán tử nâng cao, đánh giá độ tin cậy của nguồn." },
  { n: 3, icon: "💬", title: "Viết Prompt hiệu quả", desc: "So sánh prompt cơ bản và cải tiến, tối ưu kết quả AI." },
  { n: 4, icon: "🤝", title: "Hợp tác trực tuyến", desc: "Quản lý công việc nhóm bằng công cụ số minh bạch." },
  { n: 5, icon: "🎨", title: "Sáng tạo nội dung với AI", desc: "Ứng dụng AI tạo sinh để sản xuất nội dung học tập." },
  { n: 6, icon: "🛡️", title: "AI có trách nhiệm", desc: "Đạo đức, quyền riêng tư và bộ nguyên tắc cá nhân." },
];

type Project = {
  n: number;
  slug: string;
  tag: string;
  title: string;
  goal: string;
  process: string[];
  tools: string;
  evidence: string;
  analysis: string[];
  lesson: string[];
  tags: string[];
  progress: number;
  extra?: React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    n: 1,
    slug: "quan-ly-tep",
    tag: "Dữ liệu số",
    title: "Bài tập 1 – Thao tác cơ bản với tệp tin và thư mục",
    goal: "Biết tạo thư mục, lưu trữ tài liệu khoa học, đặt tên tệp nhất quán và quản lý dữ liệu học tập lâu dài.",
    process: [
      "Tạo thư mục chính cho môn học và phân nhóm: Bài tập, Tài liệu tham khảo, Hình ảnh minh chứng, Sản phẩm cuối kỳ.",
      "Đặt tên file theo quy tắc thống nhất: NMCNS_Bai01_QuanLyTep_2026_v1.",
      "Đồng bộ hóa dữ liệu lên Google Drive để tránh mất mát và làm việc đa thiết bị.",
    ],
    tools: "File Explorer, Google Drive, OneDrive",
    evidence: "Ảnh chụp màn hình cấu trúc thư mục và ví dụ quy tắc đặt tên file.",
    analysis: [
      "Cấu trúc phân cấp rõ ràng giúp dữ liệu dễ tìm, tránh thất lạc, thuận tiện khi nộp bài.",
      "Quy tắc đặt tên MonHoc_Chuong_BaiTap_NgayThucHien_PhienBan giúp phân biệt phiên bản cũ – mới, hỗ trợ làm việc lâu dài và chia sẻ nhóm.",
      "Đồng bộ đám mây giảm rủi ro hỏng ổ cứng và cho phép truy cập nhanh.",
    ],
    lesson: [
      "Quản lý dữ liệu khoa học là kỹ năng nền tảng của công dân số.",
      "Một cấu trúc thư mục tốt giúp tiết kiệm thời gian và tăng hiệu quả học tập.",
    ],
    tags: ["Quản lý dữ liệu", "Đặt tên file", "Cloud"],
    progress: 100,
  },
  {
    n: 2,
    slug: "tim-kiem",
    tag: "Học thuật",
    title: "Bài tập 2 – Tìm kiếm và đánh giá thông tin học thuật",
    goal: "Sử dụng toán tử tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn thông tin.",
    process: [
      "Chọn chủ đề “Ứng dụng AI trong giáo dục đại học”.",
      "Áp dụng các toán tử: site:, filetype:, intitle:, \"từ khóa chính xác\", OR, dấu -, after:.",
      "So sánh kết quả từ Google Search, Google Scholar và website trường đại học.",
    ],
    tools: "Google Search, Google Scholar, cơ sở dữ liệu học thuật, PDF chính thống",
    evidence: "Ảnh kết quả tìm kiếm và bảng đánh giá 5 nguồn.",
    analysis: [
      "Tìm kiếm hiệu quả cần chiến lược: chọn từ khóa cốt lõi, giới hạn miền tin cậy, loại nhiễu bằng dấu -.",
      "Toán tử filetype:pdf giúp lọc báo cáo học thuật; site:edu.vn giúp truy cập tài liệu trường.",
      "Nguồn có tác giả, tổ chức và năm công bố rõ ràng đáng tin hơn nguồn ẩn danh.",
    ],
    lesson: [
      "Cần kiểm chứng thông tin trước khi sử dụng.",
      "Không phụ thuộc vào một nguồn duy nhất.",
    ],
    tags: ["Search Operators", "Đánh giá nguồn", "Tư duy phản biện"],
    progress: 100,
    extra: (
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-primary/10 text-left">
            <tr>
              {["Nguồn", "Tác giả / Tổ chức", "Năm", "Độ tin cậy", "Lý do chọn", "Hạn chế"].map((h) => (
                <th key={h} className="p-3 border border-border font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-card/60">
            {[
              ["UNESCO – AI in Education", "UNESCO", "2023", "Rất cao", "Tổ chức quốc tế uy tín", "Nội dung tổng quát"],
              ["Báo cáo Bộ GD&ĐT", "Bộ Giáo dục", "2024", "Cao", "Nguồn chính thức Việt Nam", "Cập nhật chưa liên tục"],
              ["Google Scholar paper", "Nguyễn V.A", "2023", "Cao", "Bình duyệt học thuật", "Kỹ thuật, hơi khó đọc"],
              ["Bài blog cá nhân", "Ẩn danh", "—", "Thấp", "Gợi ý nhanh", "Không kiểm chứng"],
              ["Website trường ĐH", "ĐHQG Hà Nội", "2024", "Cao", "Nguồn giáo dục .edu.vn", "Phạm vi hẹp"],
            ].map((row, i) => (
              <tr key={i} className="hover:bg-primary/5 transition">
                {row.map((c, j) => <td key={j} className="p-3 border border-border">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    n: 3,
    slug: "prompt",
    tag: "Prompt Engineering",
    title: "Bài tập 3 – Viết Prompt hiệu quả cho các tác vụ học tập",
    goal: "Biết cách viết prompt rõ ràng để AI trả lời đúng yêu cầu hơn.",
    process: [
      "Viết prompt ban đầu chung chung: “Giải thích về AI”.",
      "Viết prompt cải tiến: xác định vai trò, bối cảnh, nhiệm vụ, đầu ra và tiêu chí.",
      "So sánh chất lượng câu trả lời giữa hai phiên bản.",
    ],
    tools: "ChatGPT, Gemini, Claude",
    evidence: "Ảnh chụp prompt ban đầu, prompt cải tiến và kết quả AI trả về.",
    analysis: [
      "Prompt cải tiến giúp AI xác định rõ vai trò (giảng viên), đối tượng (sinh viên năm nhất), phạm vi (500 từ) và định dạng (có ví dụ).",
      "Kết quả có cấu trúc, ít lan man, giảm sai lệch và bám đúng mục tiêu học tập.",
      "AI phản hồi dựa trên ngữ cảnh: prompt càng cụ thể, mô hình càng thu hẹp không gian dự đoán và tạo câu trả lời phù hợp hơn.",
    ],
    lesson: [
      "Muốn AI trả lời tốt cần đặt câu hỏi tốt.",
      "Prompt hiệu quả cần đủ vai trò, bối cảnh, nhiệm vụ, tiêu chí và định dạng.",
    ],
    tags: ["Prompt", "So sánh", "AI tạo sinh"],
    progress: 100,
    extra: (
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-5 bg-muted/60 border border-border">
          <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Prompt ban đầu</div>
          <p className="text-sm italic">“Giải thích về AI cho tôi.”</p>
        </div>
        <div className="rounded-2xl p-5 bg-secondary/40 border border-border">
          <div className="text-xs font-semibold text-secondary-foreground uppercase tracking-widest mb-2">Prompt cải tiến</div>
          <p className="text-sm italic">
            “Với vai trò giảng viên môn Nhập môn CNS & AI, hãy giải thích khái niệm Trí tuệ nhân tạo cho sinh viên năm nhất
            trong 400–500 từ, kèm 2 ví dụ đời sống, phần kết luận nêu 3 lưu ý sử dụng có trách nhiệm. Trình bày theo mục đánh số.”
          </p>
        </div>
      </div>
    ),
  },
  {
    n: 4,
    slug: "hop-tac",
    tag: "Teamwork",
    title: "Bài tập 4 – Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    goal: "Biết lập kế hoạch, phân công công việc và theo dõi tiến độ nhóm bằng công cụ trực tuyến.",
    process: [
      "Tạo bảng quản lý công việc chung trên Trello/Notion.",
      "Phân nhiệm vụ theo thành viên, đặt hạn hoàn thành cụ thể.",
      "Theo dõi trạng thái: Chưa làm / Đang làm / Hoàn thành / Cần chỉnh sửa.",
      "Tổ chức họp nhóm định kỳ và phản hồi sản phẩm chéo.",
    ],
    tools: "Trello, Notion, Google Sheets, Microsoft Planner",
    evidence: "Ảnh chụp bảng công việc nhóm và biên bản họp.",
    analysis: [
      "Công cụ trực tuyến giúp nhóm làm việc minh bạch, dễ kiểm soát tiến độ.",
      "Mỗi thành viên biết rõ nhiệm vụ, tránh trùng lặp hoặc bỏ sót.",
      "Trạng thái công việc giúp phát hiện điểm nghẽn sớm để điều chỉnh.",
    ],
    lesson: [
      "Làm việc nhóm hiệu quả cần kế hoạch rõ ràng và công cụ hỗ trợ.",
      "Công cụ số nâng cao tính trách nhiệm và khả năng phối hợp.",
    ],
    tags: ["Trello", "Notion", "Quản lý dự án"],
    progress: 100,
    extra: (
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-secondary/40 text-left">
            <tr>
              {["Thành viên", "Nhiệm vụ", "Hạn hoàn thành", "Trạng thái", "Ghi chú"].map((h) => (
                <th key={h} className="p-3 border border-border font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-card/60">
            {[
              ["An", "Thiết kế giao diện", "20/12", "Hoàn thành", "Đã review"],
              ["Bình", "Viết nội dung", "22/12", "Đang làm", "Cần bổ sung ví dụ"],
              ["Chi", "Tổng hợp minh chứng", "24/12", "Cần chỉnh sửa", "Thiếu ảnh Prompt"],
              ["Dũng", "Kiểm tra & xuất bản", "26/12", "Chưa làm", "Chờ nhóm hoàn tất"],
            ].map((row, i) => (
              <tr key={i} className="hover:bg-secondary/20 transition">
                {row.map((c, j) => <td key={j} className="p-3 border border-border">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    n: 5,
    slug: "sang-tao",
    tag: "AI Creative",
    title: "Bài tập 5 – Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    goal: "Biết dùng AI để tạo sản phẩm nội dung số phục vụ học tập.",
    process: [
      "Bước 1 – Lên ý tưởng: chọn khái niệm “Học máy” để làm video ngắn.",
      "Bước 2 – Viết kịch bản với ChatGPT, chỉnh sửa lại theo giọng cá nhân.",
      "Bước 3 – Tạo hình ảnh minh họa bằng DALL·E; tạo giọng đọc bằng công cụ TTS.",
      "Bước 4 – Ghép video bằng CapCut/Canva, thêm chú thích và nhạc nền.",
      "Bước 5 – Kiểm tra chất lượng, đối chiếu nguồn học thuật.",
      "Bước 6 – Hoàn thiện và xuất bản sản phẩm.",
    ],
    tools: "ChatGPT, Canva, CapCut, Gemini, DALL·E",
    evidence: "Video ngắn dưới 5 phút hoặc infographic được nhúng bên dưới.",
    analysis: [
      "AI tăng tốc lên ý tưởng và sản xuất nội dung, nhưng con người quyết định thông điệp cuối cùng.",
      "Vai trò con người: chọn lọc, biên tập, đảm bảo tính chính xác và cá nhân hóa.",
      "Sản phẩm tốt là sự kết hợp giữa năng lực con người và công cụ AI.",
    ],
    lesson: [
      "AI là công cụ hỗ trợ sáng tạo, không thay thế hoàn toàn tư duy cá nhân.",
      "Cần biết chọn lọc, biên tập và chịu trách nhiệm với nội dung mình tạo ra.",
    ],
    tags: ["AI tạo sinh", "Video", "Infographic"],
    progress: 100,
    extra: (
      <div className="mt-6 aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 border border-border flex items-center justify-center text-center p-8">
        <div>
          <div className="text-4xl mb-3">🎬</div>
          <p className="font-semibold">Khu vực nhúng sản phẩm video / infographic</p>
          <p className="text-sm text-muted-foreground mt-1">Thay bằng iframe YouTube hoặc ảnh sản phẩm thật.</p>
        </div>
      </div>
    ),
  },
  {
    n: 6,
    slug: "ai-trach-nhiem",
    tag: "Đạo đức AI",
    title: "Bài tập 6 – Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal: "Hiểu các vấn đề đạo đức khi sử dụng AI và xây dựng bộ nguyên tắc cá nhân.",
    process: [
      "Tìm hiểu chính sách sử dụng AI trong môi trường học thuật.",
      "Phân tích các vấn đề: đạo văn, phụ thuộc AI, sai lệch thông tin, thiên kiến thuật toán, quyền riêng tư.",
      "Xây dựng bộ nguyên tắc sử dụng AI cá nhân gồm 7 điều.",
    ],
    tools: "Tài liệu học thuật, quy định nhà trường, các công cụ AI phổ biến",
    evidence: "Ảnh bộ nguyên tắc cá nhân và bảng phân tích rủi ro đạo đức.",
    analysis: [
      "AI mang lại nhiều cơ hội nhưng cũng tạo rủi ro về đạo đức học thuật.",
      "Người học cần phát triển năng lực tự đánh giá, phản biện và kiểm chứng.",
      "Giải pháp: kiểm chứng đa nguồn, ghi chú khi dùng AI, không nhập dữ liệu nhạy cảm, viết lại bằng hiểu biết cá nhân.",
    ],
    lesson: [
      "Trách nhiệm số là kỹ năng quan trọng trong thời đại AI.",
      "Sử dụng AI đúng cách giúp người học phát triển bền vững hơn.",
    ],
    tags: ["Đạo đức", "Quyền riêng tư", "Phản biện"],
    progress: 100,
    extra: (
      <div className="mt-6 grid md:grid-cols-2 gap-3">
        {[
          "Không dùng AI để gian lận hoặc làm thay toàn bộ bài tập.",
          "Luôn kiểm chứng thông tin do AI cung cấp.",
          "Ghi rõ khi có sử dụng AI trong quá trình học tập.",
          "Không nhập dữ liệu cá nhân hoặc thông tin nhạy cảm vào AI.",
          "Không sao chép nguyên văn nội dung AI nếu chưa kiểm tra và chỉnh sửa.",
          "Sử dụng AI để hỗ trợ tư duy, không thay thế tư duy.",
          "Chịu trách nhiệm cuối cùng với sản phẩm học tập của bản thân.",
        ].map((t, i) => (
          <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-accent/30 border border-border">
            <span className="text-primary font-bold">{i + 1}.</span>
            <span className="text-sm">{t}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const EVIDENCE = [
  { icon: "🗂️", title: "Cấu trúc thư mục", desc: "Ảnh chụp hệ thống thư mục môn học đã tổ chức." },
  { icon: "🔍", title: "Kết quả tìm kiếm học thuật", desc: "Ảnh áp dụng toán tử site:, filetype:, intitle:..." },
  { icon: "💡", title: "So sánh Prompt", desc: "Ảnh prompt ban đầu vs prompt cải tiến kèm kết quả." },
  { icon: "📋", title: "Bảng quản lý công việc nhóm", desc: "Ảnh Trello/Notion phân công và theo dõi tiến độ." },
  { icon: "🎥", title: "Sản phẩm AI sáng tạo", desc: "Ảnh/video sản phẩm số hoàn chỉnh." },
  { icon: "🛡️", title: "Bộ nguyên tắc AI cá nhân", desc: "Ảnh 7 nguyên tắc sử dụng AI có trách nhiệm." },
];

const SKILLS = [
  { name: "Quản lý tệp và dữ liệu số", level: 90, use: "Tổ chức tài liệu học tập, đồng bộ đám mây" },
  { name: "Tìm kiếm thông tin học thuật", level: 85, use: "Nghiên cứu, viết tiểu luận" },
  { name: "Đánh giá độ tin cậy nguồn", level: 80, use: "Chọn tài liệu tham khảo chất lượng" },
  { name: "Viết Prompt hiệu quả", level: 88, use: "Khai thác AI hỗ trợ học tập" },
  { name: "Làm việc nhóm trực tuyến", level: 82, use: "Điều phối dự án nhóm" },
  { name: "Sáng tạo nội dung số bằng AI", level: 78, use: "Tạo video, infographic học tập" },
  { name: "Sử dụng AI có trách nhiệm", level: 92, use: "Bảo đảm liêm chính học thuật" },
  { name: "Tự đánh giá & cải thiện bản thân", level: 85, use: "Phản tư và phát triển liên tục" },
];

/* ============ Component ============ */
function Portfolio() {
  const [showTop, setShowTop] = useState(false);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground relative overflow-x-clip">
      {/* Decorative floating blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-primary/25 blur-3xl blob-morph float-slower" />
        <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] bg-secondary/25 blur-3xl blob-morph float-slow" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent/40 blur-3xl blob-morph drift-x" />
      </div>

      {/* ========== Nav ========== */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#hero" className="font-bold text-lg tracking-tight flex items-center gap-2">
            <span className="relative inline-block w-9 h-9">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary spin-slow" />
              <span className="absolute inset-[3px] rounded-full bg-background flex items-center justify-center text-xs font-black text-primary">P</span>
            </span>
            <span>Portfolio<span className="text-secondary">.</span></span>
          </a>
          <nav className="hidden md:flex gap-1 text-sm">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ========== Hero ========== */}
      <section id="hero" className="relative pt-32 pb-20 px-5 grain">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-70" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-widest mb-6 green-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Nhập môn CNS &amp; AI · 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Portfolio{" "}
              <span className="relative inline-block">
                <span className="text-shimmer">Kỹ thuật số</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M2 8 Q 80 -2 150 6 T 298 6" stroke="var(--secondary)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              cá nhân
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
              Hành trình học tập môn <em>Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</em>.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              Nơi lưu trữ, trình bày và đánh giá quá trình học tập thông qua các sản phẩm số đã hoàn thành —
              từ quản lý dữ liệu, tìm kiếm học thuật đến sử dụng AI có trách nhiệm.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { h: "#about", t: "Giới thiệu" },
                { h: "#projects", t: "Dự án học tập" },
                { h: "#evidence", t: "Minh chứng" },
                { h: "#conclusion", t: "Tổng kết" },
              ].map((b, i) => (
                <a
                  key={b.h}
                  href={b.h}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 ${
                    i === 0
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-card border border-border hover:border-primary"
                  }`}
                >
                  {b.t} →
                </a>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-4 gap-3 max-w-lg">
              {[
                { n: "6", l: "Nhiệm vụ" },
                { n: "20+", l: "Minh chứng" },
                { n: "8", l: "Kỹ năng" },
                { n: "100%", l: "Hoàn thành" },
              ].map((s) => (
                <div key={s.l} className="text-center p-3 rounded-2xl bg-card/70 border border-border backdrop-blur">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{s.n}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Orbit visual */}
          <div className="reveal relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-accent/30 blur-3xl" />
            {/* Orbit rings */}
            <div className="absolute inset-6 rounded-full border border-dashed border-primary/50 spin-slow" />
            <div className="absolute inset-16 rounded-full border border-dashed border-primary/30 spin-reverse" />
            {/* Orbiting chips */}
            {["📁", "🔎", "💬", "🤝", "🎨", "🛡️"].map((e, i) => {
              const angle = (i / 6) * Math.PI * 2;
              const r = 46;
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              return (
                <div
                  key={e}
                  className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card border border-primary/30 shadow-lg shadow-primary/30 flex items-center justify-center text-xl float-slow"
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s` }}
                >
                  {e}
                </div>
              );
            })}
            {/* Center core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-card to-muted border border-primary/30 flex flex-col items-center justify-center text-center green-glow">
                <div className="text-5xl">🤖</div>
                <div className="text-[11px] uppercase tracking-widest text-primary mt-2">AI · Human</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="relative mt-16 py-4 border-y border-border bg-card/40 backdrop-blur overflow-hidden">
          <div className="flex marquee-track gap-10 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                "Quản lý dữ liệu số",
                "★",
                "Tìm kiếm học thuật",
                "★",
                "Prompt Engineering",
                "★",
                "Hợp tác trực tuyến",
                "★",
                "AI tạo sinh",
                "★",
                "AI có trách nhiệm",
                "★",
                "Tư duy phản biện",
                "★",
              ].map((t, i) => (
                <span key={`${k}-${i}`} className={i % 2 ? "text-primary" : "text-foreground/70"}>
                  {t}
                </span>
              )),
            )}
          </div>
        </div>
      </section>


      {/* ========== About ========== */}
      <Section id="about" eyebrow="About Me" title="Giới thiệu bản thân">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8">
          <div className="reveal rounded-3xl p-8 bg-card border border-border shadow-xl shadow-primary/5">
            <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl">
              👩‍🎓
            </div>
            <h3 className="text-center mt-5 text-xl font-bold">[Điền tên của bạn]</h3>
            <p className="text-center text-sm text-muted-foreground">[Ngành học] · [Trường / Lớp]</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["Công nghệ số", "AI", "Nội dung số", "Teamwork", "Dữ liệu"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
              ))}
            </div>
          </div>

          <div className="reveal space-y-5">
            <InfoBlock title="Sở thích cá nhân">
              Học công nghệ số, khám phá AI, sáng tạo nội dung, quản lý dữ liệu và làm việc nhóm.
            </InfoBlock>
            <InfoBlock title="Mục tiêu Portfolio">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Hệ thống hóa toàn bộ các bài tập cuối kỳ.</li>
                <li>Chứng minh năng lực sử dụng công cụ số và AI trong học tập.</li>
                <li>Lưu trữ sản phẩm cá nhân để dễ truy cập, chia sẻ và phát triển.</li>
                <li>Rèn luyện kỹ năng trình bày, phân tích, phản biện và tự đánh giá.</li>
              </ul>
            </InfoBlock>
          </div>
        </div>
      </Section>

      {/* ========== Overview timeline ========== */}
      <Section id="overview" eyebrow="Project Overview" title="Hành trình 6 nhiệm vụ">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent" />
          <div className="space-y-10">
            {MISSIONS.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <div key={m.n} className="reveal md:grid md:grid-cols-9 md:gap-6 items-center relative">
                  <div className={`md:col-span-4 ${right ? "md:order-3" : ""}`}>
                    <div className={`group rounded-3xl p-6 bg-card border border-border hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-1 transition-all ${right ? "md:text-left" : "md:text-right"}`}>
                      <div className={`flex items-center gap-3 mb-3 ${right ? "md:justify-start" : "md:justify-end"}`}>
                        <span className="text-3xl">{m.icon}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary px-2 py-1 rounded-full bg-primary/10">Nhiệm vụ {m.n}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{m.desc}</p>
                      <a href={`#project-${m.n}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Xem chi tiết <span>→</span>
                      </a>
                    </div>
                  </div>
                  {/* Center node */}
                  <div className="hidden md:flex md:col-span-1 md:order-2 justify-center">
                    <div className="relative w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center font-black text-primary shadow-lg shadow-primary/20">
                      {m.n}
                      <span className="absolute inset-0 rounded-full border-2 border-secondary/40 animate-ping" />
                    </div>
                  </div>
                  <div className={`hidden md:block md:col-span-4 ${right ? "md:order-1" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>
      </Section>


      {/* ========== Projects ========== */}
      <Section id="projects" eyebrow="Projects" title="6 dự án học tập chi tiết">
        <div className="space-y-10">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.n} p={p} />
          ))}
        </div>
      </Section>

      {/* ========== Evidence ========== */}
      <Section id="evidence" eyebrow="Evidence Gallery" title="Thư viện minh chứng">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVIDENCE.map((e, i) => (
            <div
              key={i}
              className="reveal group relative rounded-2xl overflow-hidden bg-card border border-border hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15 transition-all"
              style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 0.6}deg)` }}
            >
              {/* Tape */}
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 tape rounded-sm shadow z-10" />
              <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/25 to-accent/20 grid-bg" />
                <span className="relative text-6xl group-hover:scale-110 transition-transform">{e.icon}</span>
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-background/80 px-2 py-1 rounded-full">
                  #0{i + 1}
                </span>
              </div>
                <div className="p-5">
                  <h4 className="font-semibold mb-1">{e.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{e.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-2 py-1 rounded-full bg-primary/15 text-primary uppercase tracking-widest">Placeholder</span>
                    <button className="text-sm font-semibold text-primary hover:underline">Xem chi tiết →</button>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </Section>


      {/* ========== Skills ========== */}
      <Section id="skills" eyebrow="Skills Matrix" title="Bảng tổng hợp kỹ năng đạt được">
        <div className="grid md:grid-cols-2 gap-4">
          {SKILLS.map((s) => (
            <div key={s.name} className="reveal p-5 rounded-2xl bg-card border border-border">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="font-semibold">{s.name}</h4>
                <span className="text-sm font-bold text-primary">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden mb-3">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground/80">Ứng dụng:</strong> {s.use}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ========== Conclusion ========== */}
      <Section id="conclusion" eyebrow="Conclusion" title="Tổng kết & tự đánh giá">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="reveal p-6 rounded-2xl bg-card border border-border">
            <h4 className="font-semibold mb-3 text-primary">Khó khăn đã gặp</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground">
              <li>Sắp xếp nội dung sao cho khoa học và mạch lạc.</li>
              <li>Đánh giá độ tin cậy của thông tin từ nhiều nguồn.</li>
              <li>Viết prompt đủ rõ ràng để AI trả lời chất lượng.</li>
              <li>Cân bằng giữa sử dụng AI và tư duy cá nhân.</li>
            </ul>
          </div>
          <div className="reveal p-6 rounded-2xl bg-card border border-border">
            <h4 className="font-semibold mb-3 text-primary">Cách khắc phục</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground">
              <li>Lập kế hoạch trước khi thực hiện từng nhiệm vụ.</li>
              <li>Kiểm chứng thông tin từ nhiều nguồn học thuật uy tín.</li>
              <li>So sánh nhiều phiên bản prompt để tối ưu kết quả.</li>
              <li>Chủ động chỉnh sửa, cá nhân hóa mọi sản phẩm AI.</li>
            </ul>
          </div>
          <div className="reveal p-6 rounded-2xl bg-card border border-border md:col-span-2">
            <h4 className="font-semibold mb-3 text-primary">Định hướng tương lai</h4>
            <ul className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                "Tiếp tục dùng Portfolio để lưu trữ sản phẩm học tập.",
                "Ứng dụng kỹ năng số vào học tập, nghiên cứu và công việc.",
                "Sử dụng AI như công cụ hỗ trợ học tập có trách nhiệm.",
              ].map((t, i) => (
                <li key={i} className="p-4 rounded-xl bg-primary/10 border border-primary/20">{t}</li>
              ))}
            </ul>
          </div>
          <blockquote className="reveal md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 border border-primary/20 text-lg italic leading-relaxed green-spotlight">
            “Thông qua quá trình xây dựng Portfolio kỹ thuật số cá nhân, em không chỉ lưu trữ các sản phẩm học tập
            mà còn nhìn lại toàn bộ quá trình rèn luyện kỹ năng công nghệ số, tư duy phản biện và khả năng sử dụng AI
            có trách nhiệm. Portfolio giúp em hiểu rằng trong môi trường học tập hiện đại, công nghệ không chỉ là công
            cụ hỗ trợ mà còn là phương tiện để người học thể hiện năng lực, sự sáng tạo và thái độ học tập nghiêm túc.
            Những kỹ năng như quản lý dữ liệu, tìm kiếm học thuật, viết prompt, làm việc nhóm trực tuyến và đánh giá
            đạo đức AI sẽ tiếp tục có giá trị trong học tập, nghiên cứu và công việc tương lai.”
          </blockquote>
        </div>
      </Section>

      {/* ========== Footer ========== */}
      <footer className="mt-16 border-t border-border bg-card/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-bold text-base mb-2">Portfolio Kỹ thuật số cá nhân</div>
            <p className="text-muted-foreground">
              Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng lực số.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">Thông tin</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>Sinh viên: [Điền tên]</li>
              <li>Môn học: Nhập môn CNS & Ứng dụng AI</li>
              <li>Năm học: 2025 – 2026</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Liên hệ</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>Email: yourname@example.edu.vn</li>
              <li>Trường: [Điền trường]</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-4 text-xs text-muted-foreground border-t border-border">
          © 2026 · Made with 💗 for learning
        </div>
      </footer>

      {/* ========== Back to top ========== */}
      <button
        aria-label="Về đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:-translate-y-1 transition-all ${
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        ↑
      </button>
    </div>
  );
}

/* ============ Sub components ============ */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 px-5 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-10 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</div>
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>
        {children}
      </div>
    </section>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 bg-card border border-border">
      <h4 className="font-semibold mb-2 text-primary">{title}</h4>
      <div className="text-sm text-foreground/80">{children}</div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article id={`project-${p.n}`} className="reveal scroll-mt-24 rounded-3xl p-7 md:p-9 bg-card border border-border shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
            Dự án {p.n} · {p.tag}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">{p.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-medium border border-primary/20">{t}</span>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Tiến độ hoàn thành</span>
          <span>{p.progress}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${p.progress}%` }} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="🎯 Mục tiêu"><p>{p.goal}</p></Field>
        <Field label="🛠️ Công cụ sử dụng"><p>{p.tools}</p></Field>
        <Field label="⚙️ Quá trình thực hiện">
          <ul className="list-disc pl-5 space-y-1">{p.process.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </Field>
        <Field label="📎 Minh chứng"><p>{p.evidence}</p></Field>
        <Field label="🔍 Phân tích kết quả">
          <ul className="list-disc pl-5 space-y-1">{p.analysis.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </Field>
        <Field label="💡 Bài học rút ra">
          <ul className="list-disc pl-5 space-y-1">{p.lesson.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </Field>
      </div>

      {p.extra}

      <div className="mt-6 aspect-[16/6] rounded-2xl bg-gradient-to-br from-muted via-secondary/20 to-accent/20 border border-dashed border-border flex items-center justify-center text-sm text-muted-foreground">
        📷 Khu vực chèn ảnh minh chứng — thay bằng ảnh thật
      </div>
    </article>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm font-semibold text-primary mb-1.5">{label}</div>
      <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}
