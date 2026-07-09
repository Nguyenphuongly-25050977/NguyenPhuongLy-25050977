import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import p1Taskbar from "@/assets/project1/taskbar.png.asset.json";
import p1PcNay from "@/assets/project1/pc-nay.png.asset.json";
import p1NewFolder from "@/assets/project1/new-folder.png.asset.json";
import p1GhiChu from "@/assets/project1/ghichu-file.png.asset.json";
import p1CopyMenu from "@/assets/project1/copy-menu.png.asset.json";
import p1Docx from "@/assets/project1/GhiChuQuanTrong.docx.asset.json";
import p2Pdf from "@/assets/project2/BaoCaoTimKiemThongTin.pdf.asset.json";
import p3Pdf from "@/assets/project3/BaoCao_DuAn3.pdf.asset.json";
import p4Pdf from "@/assets/project4/BaoCao_DuAn4.pdf.asset.json";
import p4Docx from "@/assets/project4/BaoCao_DuAn4.docx.asset.json";
import p4Docx2 from "@/assets/project4/BaoCao_DuAn4_v2.docx.asset.json";
import p5Pdf from "@/assets/project5/BaoCao_DuAn5.pdf.asset.json";
import p5Docx from "@/assets/project5/BaoCao_DuAn5.docx.asset.json";
import p5Img1 from "@/assets/project5/infographic1.png.asset.json";
import p5Img2 from "@/assets/project5/dalle-feedback.png.asset.json";
import p5Img3 from "@/assets/project5/infographic-full.png.asset.json";


import p6Pdf from "@/assets/project6/BaoCao_DuAn6.pdf.asset.json";
import p6Docx from "@/assets/project6/BaoCao_DuAn6.docx.asset.json";
import p6Img1 from "@/assets/project6/prompt-danyai.png.asset.json";
import p6Img2 from "@/assets/project6/prompt-loiich.png.asset.json";
import p6Poster from "@/assets/project6/ai-trach-nhiem-poster.png.asset.json";

import p2Src1 from "@/assets/project2/nguon14.png.asset.json";
import p2Src2 from "@/assets/project2/nguon15.png.asset.json";
import p2Src3 from "@/assets/project2/nguon16.png.asset.json";
import p2Src4 from "@/assets/project2/nguon17.png.asset.json";
import p3Src1 from "@/assets/project3/prompt1.png.asset.json";
import p3Src2 from "@/assets/project3/prompt2.png.asset.json";
import p3Src3 from "@/assets/project3/prompt3.png.asset.json";


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
  { n: 1, icon: "📁", title: "Bài 1 - Bài tập 1 của mục 1.4: Thao tác cơ bản với tệp tin và thư mục", desc: "Tổ chức dữ liệu học tập khoa học, đặt tên file nhất quán." },
  { n: 2, icon: "🔎", title: "Bài 2 - Bai tập 2 cua mục 2.4: Tìm kiem va đanh gia thong tin hoc thuật", desc: "Sử dụng toán tử nâng cao, đánh giá độ tin cậy của nguồn." },
  { n: 3, icon: "💬", title: "Bài 3 - Bài tập 2 của mục 3.4: Viết Prompt hiệu quả cho các tác vụ học tập", desc: "So sánh prompt cơ bản và cải tiến, tối ưu kết quả AI." },
  { n: 4, icon: "🤝", title: "Bài 4 - Bài tập 3 của mục 4.4: Sử dung cong cụ hợp tác trực tuyến cho dự án nhóm", desc: "Quản lý công việc nhóm bằng công cụ số minh bạch." },
  { n: 5, icon: "🎨", title: "Bài 5 - Bài tập 2 của mục 5.4: Sử dụng Al tạo sinh để hỗ trợ sáng tao nội dung", desc: "Ứng dụng AI tạo sinh để sản xuất nội dung học tập." },
  { n: 6, icon: "🛡️", title: "Bài 6 - Bài tập 4 của mục 6.4: Sử dung Al có trách nhiem trong học tập và nghien cứu", desc: "Đạo đức, quyền riêng tư và bộ nguyên tắc cá nhân." },
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
  strengths: string[];
  improvements: string[];
  aiUsage: string[];
  integrity: string[];
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
      "Mở File Explorer bằng tổ hợp phím Windows + E.",
      "Truy cập ổ đĩa D: và tạo thư mục mới 'Tài liệu học tập'.",
      "Tạo các thư mục con: Bài tập, Slide bài giảng, Tài liệu tham khảo.",
      "Tạo file Word 'Ghi chú.docx' trong thư mục Bài tập.",
      "Thực hành sao chép, di chuyển, đổi tên tệp tin.",
      "Tạo shortcut cho thư mục thường dùng ra Desktop.",
      "Xóa các tệp tin không cần thiết (di chuyển vào Recycle Bin).",
    ],
    tools: "File Explorer, Microsoft Word, Windows 10/11",
    evidence: "\n",
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
    strengths: [
      "Thực hiện đầy đủ các thao tác cơ bản: tạo, đổi tên, copy, cut, delete, restore.",
      "Chụp màn hình chi tiết từng bước làm minh chứng rõ ràng.",
      "Tổ chức cấu trúc thư mục khoa học, dễ quản lý và dễ tìm.",
    ],
    improvements: [
      "Cần tìm hiểu thêm các phím tắt File Explorer để thao tác nhanh hơn.",
      "Học cách sử dụng tính năng tìm kiếm nâng cao trong File Explorer.",
    ],
    aiUsage: [
      "Không sử dụng AI trong bài tập này.",
      "Tự thực hành trực tiếp trên máy tính theo hướng dẫn của giảng viên.",
    ],
    integrity: [
      "Tôi đã tự thực hiện tất cả các thao tác trên máy tính cá nhân.",
      "Ảnh chụp màn hình là minh chứng thực tế từ quá trình thực hành.",
      "Tất cả nội dung báo cáo được viết dựa trên trải nghiệm thực tế.",
    ],
    extra: (
      <div className="mt-6 space-y-4">
        <div className="text-sm font-semibold text-primary uppercase tracking-widest">📸 Ảnh minh chứng thực hành</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { src: p1Taskbar.url, cap: "Mở File Explorer từ thanh tác vụ (Win + E)" },
            { src: p1PcNay.url, cap: "Truy cập PC này và ổ đĩa D:" },
            { src: p1NewFolder.url, cap: "Chuột phải → Mới → Cặp để tạo thư mục" },
            { src: p1GhiChu.url, cap: "Tệp GhiChuQuanTrong.txt sau khi đổi tên" },
            { src: p1CopyMenu.url, cap: "Menu chuột phải: Sao chép (Ctrl+C) tệp tin" },
          ].map((it, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden border border-border bg-card group">
              <img src={it.src} alt={it.cap} loading="lazy" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="p-3 text-xs text-muted-foreground">{it.cap}</figcaption>
            </figure>
          ))}
        </div>
        <a
          href={p1Docx.url}
          target="_blank"
          rel="noopener noreferrer"
          download="GhiChuQuanTrong.docx"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/15 border border-primary/30 text-primary font-semibold hover:bg-primary/25 transition green-glow"
        >
          📄 Tải tệp minh chứng: GhiChuQuanTrong.docx
        </a>
      </div>
    ),
  },
  {
    n: 2,
    slug: "tim-kiem",
    tag: "Học thuật",
    title: "Bài tập 2 – Tìm kiếm và đánh giá thông tin học thuật",
    goal: "Phân tích tác động của trí tuệ nhân tạo (AI) đối với giáo dục đại học, thông qua việc tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
    process: [
      "Chọn chủ đề: “Tác động của trí tuệ nhân tạo trong giáo dục đại học” — phù hợp ngành công nghệ giáo dục, có tính mới và đa chiều.",
      "Xác định phạm vi tìm kiếm: cơ sở dữ liệu học thuật (Google Scholar, Microsoft Academic), tạp chí chuyên ngành (QLNN, Công thương), sách chuyên khảo (Springer, Elsevier) và nguồn mở.",
      "Xây dựng bộ từ khóa: “AI in higher education”, “Artificial Intelligence and pedagogy”, “AI adoption in universities”, “EdTech and AI”.",
      "Thu thập 12 tài liệu: 7 bài báo khoa học, 2 sách chuyên khảo, 3 nguồn mở phản ánh đa chiều về ứng dụng AI trong giảng dạy, quản lý và đạo đức.",
      "Đánh giá từng nguồn theo 4 tiêu chí: Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu, Trích dẫn và Tính cập nhật.",
      "Tổng hợp bảng đánh giá 12 nguồn và trình bày danh mục tài liệu tham khảo theo chuẩn Harvard Style.",
    ],
    tools: "Google Scholar, Microsoft Academic, Springer, Elsevier, UNESCO, OECD, Harvard Referencing",
    evidence: "Báo cáo PDF hoàn chỉnh gồm mục tiêu, phương pháp, bảng đánh giá 12 nguồn và danh mục tài liệu tham khảo chuẩn Harvard.",
    analysis: [
      "Nguồn có tác giả và cơ quan uy tín (Selwyn – Monash, Holmes – OECD, UNESCO) có độ tin cậy rất cao nhờ phương pháp nghiên cứu bài bản và trích dẫn nhiều.",
      "Nguồn mở như Tapchicongthuong, EdSurge chỉ đạt độ tin cậy trung bình do phương pháp tổng hợp, ít trích dẫn hàn lâm — chỉ dùng để tham khảo bối cảnh.",
      "Blog cá nhân ẩn danh, cũ, không có trích dẫn — độ tin cậy thấp, cần loại bỏ khỏi luận cứ chính.",
      "Đa dạng nguồn (khoa học + báo cáo + sách) giúp phản ánh đầy đủ cả cơ hội và thách thức khi ứng dụng AI trong giáo dục đại học.",
    ],
    lesson: [
      "Đánh giá nguồn phải dựa trên tiêu chí học thuật, không chỉ dựa vào cảm quan hay lượng truy cập.",
      "Kết hợp nhiều loại nguồn giúp có cái nhìn đa chiều, tránh thiên lệch.",
      "Trích dẫn Harvard Style là kỹ năng bắt buộc để đảm bảo liêm chính học thuật.",
    ],
    tags: ["Google Scholar", "Đánh giá nguồn", "Harvard Style", "AI in Education"],
    progress: 100,
    strengths: [
      "Thu thập đủ 12 tài liệu đa dạng: bài báo khoa học, sách chuyên khảo, báo cáo tổ chức quốc tế và nguồn mở.",
      "Áp dụng nhất quán 4 tiêu chí đánh giá cho mọi nguồn — có bảng tổng hợp rõ ràng.",
      "Danh mục tài liệu tham khảo trình bày đúng chuẩn Harvard Style, có link truy cập.",
    ],
    improvements: [
      "Nên bổ sung nguồn từ Scopus, Web of Science để tăng độ chuyên sâu.",
      "Cần phân tích định lượng chỉ số trích dẫn (citation count) thay vì đánh giá định tính.",
      "Loại bỏ dứt khoát các nguồn độ tin cậy thấp thay vì đưa vào bảng để so sánh.",
    ],
    aiUsage: [
      "Có sử dụng AI để gợi ý bộ từ khóa tiếng Anh (“AI in higher education”, “EdTech and AI”).",
      "Tự đọc, đối chiếu và đánh giá độ tin cậy từng nguồn — AI không quyết định thay.",
      "Tự trình bày trích dẫn Harvard Style dựa trên hướng dẫn chính thức.",
    ],
    integrity: [
      "Cả 12 tài liệu đều do tôi tự truy cập, đọc và ghi chú lại.",
      "Bảng đánh giá độ tin cậy phản ánh nhận định cá nhân sau khi phân tích từng nguồn.",
      "Danh mục tài liệu tham khảo được lập theo chuẩn Harvard, không sao chép từ bài khác.",
    ],
    extra: (
      <div className="mt-6 space-y-4">
        <div className="text-sm font-semibold text-primary uppercase tracking-widest">📊 Bảng đánh giá 12 nguồn thông tin</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-primary/10 text-left">
              <tr>
                {["STT", "Tên tài liệu", "Loại nguồn", "Tác giả / Cơ quan", "Phương pháp", "Trích dẫn", "Cập nhật", "Độ tin cậy"].map((h) => (
                  <th key={h} className="p-3 border border-border font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-card/60">
              {[
                ["1", "Lê Anh Vinh & Trần Mỹ Ngọc (2023)", "Bài báo khoa học", "Viện KHGDVN", "Phân tích chính sách", "Cao", "Mới", "Rất cao"],
                ["2", "Trịnh T.T.H. et al. (2025) – QLNN", "Bài báo khoa học", "ĐHQG Hà Nội", "PLS-SEM", "Trung bình", "Mới", "Cao"],
                ["3", "Tapchicongthuong.vn (2025)", "Nguồn mở", "Tạp chí Công thương", "Tổng hợp", "Thấp", "Mới", "Trung bình"],
                ["4", "Selwyn, N. (2022)", "Sách chuyên khảo", "Monash University", "Phân tích lý thuyết", "Cao", "Mới", "Rất cao"],
                ["5", "Holmes, W. et al. (2021)", "Báo cáo học thuật", "OECD", "Tổng hợp dữ liệu", "Cao", "Mới", "Rất cao"],
                ["6", "Zhang & Dafoe (2020)", "Bài báo khoa học", "Oxford University", "Phân tích định lượng", "Cao", "Khá mới", "Cao"],
                ["7", "UNESCO (2023)", "Nguồn mở", "UNESCO", "Phân tích chính sách", "Trung bình", "Mới", "Cao"],
                ["8", "Nguyễn T.H. (2024)", "Bài báo khoa học", "ĐH Bách khoa", "Thực nghiệm", "Trung bình", "Mới", "Cao"],
                ["9", "EdSurge (2023)", "Nguồn mở", "EdSurge", "Phỏng vấn chuyên gia", "Thấp", "Mới", "Trung bình"],
                ["10", "Phạm M.H. (2022)", "Bài báo khoa học", "Trường ĐHSP", "Phân tích định tính", "Trung bình", "Mới", "Cao"],
                ["11", "OECD (2020)", "Báo cáo học thuật", "OECD", "Tổng hợp", "Cao", "Khá mới", "Cao"],
                ["12", "Blog cá nhân (2021)", "Nguồn mở", "Không rõ", "Ý kiến cá nhân", "Không có", "Cũ", "Thấp"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-primary/5 transition">
                  {row.map((c, j) => <td key={j} className="p-3 border border-border align-top">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">📸 Ảnh minh chứng nguồn học thuật</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { src: p2Src1.url, cap: "Tạp chí Khoa học Giáo dục Việt Nam – Lê Anh Vinh & Trần Mỹ Ngọc (VNIES)" },
              { src: p2Src2.url, cap: "Tạp chí Công Thương – bài về trách nhiệm pháp lý & đạo đức AI trong giáo dục" },
              { src: p2Src3.url, cap: "European Journal of Education (Wiley) – Selwyn, N. (2022)" },
              { src: p2Src4.url, cap: "AIES ’20 – Zhang & Dafoe (2020), Oxford – AI Governance" },
            ].map((it, i) => (
              <figure key={i} className="rounded-2xl overflow-hidden border border-border bg-card group">
                <img src={it.src} alt={it.cap} loading="lazy" className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <figcaption className="p-3 text-xs text-muted-foreground">{it.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <a
          href={p2Pdf.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/15 border border-primary/30 text-primary font-semibold hover:bg-primary/25 transition green-glow"
        >
          📄 Xem báo cáo đầy đủ: BaoCaoTimKiemThongTin.pdf
        </a>
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
    strengths: [
      "Prompt cải tiến có đầy đủ vai trò, bối cảnh, nhiệm vụ, định dạng và tiêu chí.",
      "So sánh trực quan hai phiên bản prompt và chất lượng đầu ra.",
      "Biết cách điều chỉnh prompt theo mục tiêu học tập cụ thể.",
    ],
    improvements: [
      "Cần thử thêm các kỹ thuật prompt nâng cao như few-shot, chain-of-thought.",
      "Học cách viết prompt cho tác vụ khó hơn: phân tích số liệu, viết code.",
    ],
    aiUsage: [
      "Sử dụng ChatGPT, Gemini, Claude để thử nghiệm và so sánh kết quả.",
      "Nhiệm vụ của tôi là thiết kế prompt và đánh giá đầu ra — không copy nguyên văn.",
    ],
    integrity: [
      "Tất cả prompt là do tôi tự viết dựa trên khung học được.",
      "Kết quả AI được chụp lại đầy đủ, không chỉnh sửa để đánh lừa.",
      "Phần phân tích so sánh phản ánh nhận xét cá nhân trung thực.",
    ],
    extra: (
      <div className="mt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl p-5 bg-muted/60 border border-border">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Prompt ban đầu</div>
            <p className="text-sm italic">“Giải thích về AI cho tôi.”</p>
          </div>
          <div className="rounded-2xl p-5 bg-primary/15 border border-primary/30 green-glow">
            <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Prompt cải tiến</div>
            <p className="text-sm italic">
              “Với vai trò giảng viên môn Nhập môn CNS & AI, hãy giải thích khái niệm Trí tuệ nhân tạo cho sinh viên năm nhất
              trong 400–500 từ, kèm 2 ví dụ đời sống, phần kết luận nêu 3 lưu ý sử dụng có trách nhiệm. Trình bày theo mục đánh số.”
            </p>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">📸 Ảnh minh chứng thực hành</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: p3Src1.url, caption: "Prompt ban đầu: “Giải thích về AI cho tôi.”" },
              { src: p3Src2.url, caption: "Prompt cải tiến có vai trò, đối tượng, độ dài & định dạng" },
              { src: p3Src3.url, caption: "Kết quả AI theo prompt cải tiến (có mục đánh số & kết luận)" },
            ].map((it, i) => (
              <figure key={i} className="rounded-2xl border border-primary/30 bg-primary/5 overflow-hidden">
                <img src={it.src} alt={it.caption} className="w-full aspect-video object-cover" />
                <figcaption className="text-xs text-primary/80 p-2 text-center">{it.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <a href={p3Pdf.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/15 border border-primary/30 text-primary font-semibold hover:bg-primary/25 transition green-glow">
          📄 Xem báo cáo đầy đủ: BaoCao_DuAn3.pdf
        </a>
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
    strengths: [
      "Bảng công việc rõ ràng, phân công cụ thể tới từng thành viên.",
      "Theo dõi trạng thái công việc minh bạch, dễ phát hiện điểm nghẽn.",
      "Tổ chức họp nhóm định kỳ và có biên bản làm minh chứng.",
    ],
    improvements: [
      "Cần thiết lập nhắc hạn tự động để giảm việc quên deadline.",
      "Thử tích hợp thêm Google Calendar để đồng bộ lịch nhóm.",
    ],
    aiUsage: [
      "Sử dụng AI để gợi ý mẫu bảng phân công và checklist họp nhóm.",
      "Không dùng AI để làm thay công việc của thành viên trong nhóm.",
    ],
    integrity: [
      "Nội dung bảng phân công là kết quả thống nhất thực tế của nhóm.",
      "Biên bản họp và trạng thái công việc được cập nhật đúng sự thật.",
      "Không chỉnh sửa số liệu tiến độ để làm đẹp báo cáo.",
    ],
    extra: (
      <div className="mt-6 space-y-4">
        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">📸 Ảnh minh chứng thực hành</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Bảng Trello phân công nhiệm vụ", "Biên bản họp nhóm trên Notion", "Lịch nhóm trên Google Calendar"].map((c, i) => (
              <div key={i} className="aspect-video rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 flex flex-col items-center justify-center text-primary/70 text-xs text-center p-3 gap-2">
                <span className="text-2xl">🖼️</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={p4Docx2.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/15 hover:bg-primary/25 text-primary font-semibold text-sm transition"
          >
            📎 Tải tài liệu Word minh chứng (BaoCao_DuAn4.docx)
          </a>
          <a
            href="https://youtu.be/Smms0PHSx_I?si=ULcd6-LKnxI5TJHM"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-500 font-semibold text-sm transition"
          >
            ▶️ Xem video minh chứng nhóm (YouTube)
          </a>
        </div>
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
    evidence: "\n",
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
    strengths: [
      "Kết hợp nhiều công cụ AI (ChatGPT, DALL·E, TTS) trong cùng một sản phẩm.",
      "Kịch bản được biên tập lại theo giọng cá nhân, không copy nguyên văn AI.",
      "Sản phẩm có cấu trúc hoàn chỉnh: ý tưởng → kịch bản → hình ảnh → âm thanh → dựng.",
    ],
    improvements: [
      "Cần nâng cấp kỹ năng dựng video (transition, timing, âm thanh).",
      "Đối chiếu chặt hơn nội dung AI tạo với nguồn học thuật chính thống.",
    ],
    aiUsage: [
      "ChatGPT hỗ trợ viết nháp kịch bản; tôi biên tập lại toàn bộ.",
      "DALL·E tạo hình minh họa; TTS tạo giọng đọc — đều được tôi kiểm duyệt.",
    ],
    integrity: [
      "Ghi rõ trong sản phẩm các phần có sự tham gia của AI.",
      "Nội dung cuối cùng do tôi chịu trách nhiệm về tính chính xác.",
      "Không dùng AI để giả mạo giọng nói hoặc hình ảnh người thật.",
    ],
    extra: (
      <div className="mt-6 space-y-4">
        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">📸 Ảnh minh chứng thực hành</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: p5Img1.url, caption: "Infographic tóm tắt “AI in University Learning” (bản dọc)" },
              { src: p5Img2.url, caption: "Prompt DALL·E & phản hồi ChatGPT cho hình minh họa" },
              { src: p5Img3.url, caption: "Infographic đầy đủ: lợi ích, thách thức & sử dụng AI có trách nhiệm" },
            ].map((it, i) => (
              <figure key={i} className="rounded-2xl border border-primary/30 bg-primary/5 overflow-hidden">
                <img src={it.src} alt={it.caption} className="w-full aspect-video object-cover" />
                <figcaption className="text-xs text-primary/80 p-2 text-center">{it.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={p5Docx.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/15 border border-primary/30 text-primary font-semibold hover:bg-primary/25 transition green-glow">
            {"\n"}: BaoCao_DuAn5.docx
          </a>
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
    evidence: "\n",
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
    strengths: [
      "Xây dựng được bộ 7 nguyên tắc sử dụng AI cá nhân rõ ràng, khả thi.",
      "Phân tích đa chiều các rủi ro: đạo văn, thiên kiến, quyền riêng tư.",
      "Đối chiếu bộ nguyên tắc với quy định thực tế của nhà trường.",
    ],
    improvements: [
      "Cần cập nhật bộ nguyên tắc theo các quy định AI mới của Bộ GD&ĐT.",
      "Bổ sung tình huống thực tế minh họa cho từng nguyên tắc.",
    ],
    aiUsage: [
      "Chỉ sử dụng AI để hỏi ví dụ tình huống đạo đức, không viết thay báo cáo.",
      "Toàn bộ 7 nguyên tắc là do tôi tự soạn dựa trên suy nghĩ cá nhân.",
    ],
    integrity: [
      "Bộ nguyên tắc phản ánh cam kết cá nhân thực sự của tôi khi dùng AI.",
      "Không copy bộ nguyên tắc từ tài liệu có sẵn nào.",
      "Tôi tự chịu trách nhiệm áp dụng các nguyên tắc này trong học tập.",
    ],
    extra: (
      <div className="mt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
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
        <div>
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">📸 Ảnh minh chứng thực hành</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { src: p6Img1.url, caption: "Prompt lập dàn ý bài thuyết trình về AI trong chuyển đổi số" },
              { src: p6Img2.url, caption: "Prompt viết đoạn 300 từ về lợi ích của AI (kèm đầu ra minh họa)" },
              { src: p6Poster.url, caption: "Poster: Sử dụng AI có trách nhiệm trong học thuật" },
            ].map((it, i) => (
              <figure key={i} className="rounded-2xl border border-primary/30 bg-primary/5 overflow-hidden">
                <img src={it.src} alt={it.caption} className="w-full aspect-video object-cover" />
                <figcaption className="text-xs text-primary/80 p-2 text-center">{it.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={p6Docx.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/15 border border-primary/30 text-primary font-semibold hover:bg-primary/25 transition green-glow">
            {"\n"}: BaoCao_DuAn6.docx
          </a>
        </div>
      </div>
    ),
  },
];

const EVIDENCE = [
  {
    project: 1,
    icon: "🗂️",
    title: "Tạo thư mục môn học",
    desc: "Ảnh thao tác tạo New Folder trong ổ đĩa học tập.",
    img: p1NewFolder.url,
    href: p1Docx.url,
    fileLabel: "📄 GhiChuQuanTrong.docx",
  },
  {
    project: 1,
    icon: "🖥️",
    title: "Định vị & truy cập nhanh",
    desc: "Ghim thư mục lên Taskbar / PC này để mở nhanh khi học.",
    img: p1Taskbar.url,
    href: p1Docx.url,
    fileLabel: "📄 GhiChuQuanTrong.docx",
  },
  {
    project: 2,
    icon: "🔍",
    title: "Nguồn học thuật #1",
    desc: "Bài báo khoa học đã đánh giá theo tiêu chí CRAAP.",
    img: p2Src1.url,
    href: p2Pdf.url,
    fileLabel: "📄 BaoCaoTimKiemThongTin.pdf",
  },
  {
    project: 2,
    icon: "📚",
    title: "Nguồn học thuật #2",
    desc: "Áp dụng toán tử site:, filetype:pdf để lọc nguồn đáng tin.",
    img: p2Src3.url,
    href: p2Pdf.url,
    fileLabel: "📄 BaoCaoTimKiemThongTin.pdf",
  },
  {
    project: 3,
    icon: "💬",
    title: "Prompt ban đầu",
    desc: "Câu hỏi mở đơn giản “Giải thích về AI cho tôi.”",
    img: p3Src1.url,
    href: p3Pdf.url,
    fileLabel: "📄 BaoCao_DuAn3.pdf",
  },
  {
    project: 3,
    icon: "💡",
    title: "Prompt cải tiến (RTF)",
    desc: "Bổ sung vai trò, đối tượng, độ dài & định dạng đầu ra.",
    img: p3Src2.url,
    href: p3Pdf.url,
    fileLabel: "📄 BaoCao_DuAn3.pdf",
  },
  {
    project: 3,
    icon: "✅",
    title: "Kết quả AI cải tiến",
    desc: "Đầu ra có mục đánh số, ví dụ và phần kết luận rõ ràng.",
    img: p3Src3.url,
    href: p3Pdf.url,
    fileLabel: "📄 BaoCao_DuAn3.pdf",
  },
  {
    project: 4,
    icon: "📋",
    title: "Hợp tác nhóm trực tuyến",
    desc: "Báo cáo phân công, biên bản họp và tiến độ dự án nhóm.",
    img: null,
    href: p4Pdf.url,
    fileLabel: "📄 BaoCao_DuAn4.pdf",
  },
  {
    project: 4,
    icon: "📝",
    title: "Báo cáo chi tiết dự án nhóm (Word)",
    desc: "Bản Word đầy đủ: mục tiêu, phân công thành viên, tiến độ và kết quả cộng tác trực tuyến.",
    img: null,
    href: p4Docx.url,
    fileLabel: "📎 BaoCao_DuAn4.docx",
  },
  {
    project: 4,
    icon: "📎",
    title: "Tài liệu bổ sung dự án nhóm (Word)",
    desc: "File Word bổ sung minh chứng cho quá trình hợp tác nhóm trực tuyến.",
    img: null,
    href: p4Docx2.url,
    fileLabel: "📎 BaoCao_DuAn4_v2.docx",
  },
  {
    project: 4,
    icon: "🎬",
    title: "Video minh chứng nhóm (YouTube)",
    desc: "Video ghi lại quá trình hợp tác và trình bày sản phẩm của nhóm.",
    img: null,
    href: "https://youtu.be/Smms0PHSx_I?si=ULcd6-LKnxI5TJHM",
    fileLabel: "▶️ Xem trên YouTube",
  },
  {
    project: 5,
    icon: "🎨",
    title: "Infographic “AI in University Learning”",
    desc: "Sản phẩm số hoàn chỉnh tổng hợp lợi ích, thách thức & AI có trách nhiệm.",
    img: p5Img3.url,
    href: p5Pdf.url,
    fileLabel: "📄 BaoCao_DuAn5.pdf",
  },
  {
    project: 5,
    icon: "🖌️",
    title: "Prompt DALL·E cho hình minh họa",
    desc: "Phản hồi ChatGPT khi sinh hình vector sinh viên học cùng AI.",
    img: p5Img2.url,
    href: p5Docx.url,
    fileLabel: "📎 BaoCao_DuAn5.docx",
  },
  {
    project: 6,
    icon: "🛡️",
    title: "Prompt lập dàn ý thuyết trình",
    desc: "Dàn ý 5 phần về vai trò AI trong chuyển đổi số tại Việt Nam.",
    img: p6Img1.url,
    href: p6Pdf.url,
    fileLabel: "📄 BaoCao_DuAn6.pdf",
  },
  {
    project: 6,
    icon: "📝",
    title: "Prompt viết đoạn 300 từ về lợi ích AI",
    desc: "Ứng dụng AI có trách nhiệm để hỗ trợ viết nội dung học thuật.",
    img: p6Img2.url,
    href: p6Docx.url,
    fileLabel: "📎 BaoCao_DuAn6.docx",
  },
];



const SKILLS = [
  { name: "Quản lý tệp & dữ liệu số", short: "Quản lý tệp", level: 94, use: "Tổ chức tài liệu học tập, đồng bộ đám mây" },
  { name: "Tìm kiếm thông tin học thuật", short: "Tìm kiếm", level: 97, use: "Nghiên cứu, viết tiểu luận" },
  { name: "Đánh giá độ tin cậy nguồn", short: "Đánh giá nguồn", level: 100, use: "Chọn tài liệu tham khảo chất lượng" },
  { name: "Viết Prompt hiệu quả", short: "Prompt", level: 96, use: "Khai thác AI hỗ trợ học tập" },
  { name: "Làm việc nhóm trực tuyến", short: "Teamwork", level: 91, use: "Điều phối dự án nhóm" },
  { name: "Sáng tạo nội dung số bằng AI", short: "Sáng tạo AI", level: 93, use: "Tạo video, infographic học tập" },
  { name: "Sử dụng AI có trách nhiệm", short: "AI có TN", level: 100, use: "Bảo đảm liêm chính học thuật" },
  { name: "Tự đánh giá & cải thiện bản thân", short: "Tự đánh giá", level: 92, use: "Phản tư và phát triển liên tục" },
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
              NHẬP MÔN CNS & AI HỌC KÌ II 2026
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
                { n: "10+", l: "Minh chứng" },
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
                <div className="text-[11px] uppercase tracking-widest text-primary mt-2">{"\n"}</div>
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
            <h3 className="text-center mt-5 text-xl font-bold">Họ Và Tên: Nguyễn Phương Ly</h3>
            <p className="text-center text-sm text-muted-foreground">Sinh viên · Công nghệ số &amp; AI</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["Công nghệ số", "AI", "Nội dung số", "Teamwork", "Dữ liệu"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
              ))}
            </div>

            {/* Info rows */}
            <div className="mt-6 space-y-2.5">
              {[
                { icon: "🎓", label: "KHOA", value: "Kinh Tế và Kinh Doanh Quốc Tế" },
                { icon: "📖", label: "Trường", value: "Đại học Kinh tế - ĐHQGHN" },
                { icon: "📖", label: "Lớp", value: "Kinh Tế Quốc Tế 6" },
                { icon: "✉️", label: "Liên hệ", value: "25050977@vnu.edu.vn" },
              ].map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-primary/5 border border-primary/15 hover:bg-primary/10 transition-colors"
                >
                  <span className="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center text-sm shrink-0">
                    {r.icon}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary shrink-0">
                    {r.label}
                  </span>
                  <span className="ml-auto text-sm font-semibold text-foreground text-right truncate">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>


          <div className="reveal space-y-5">
            <InfoBlock title="Sở thích cá nhân">
              Học công nghệ số, khám phá AI, sáng tạo nội dung, quản lý dữ liệu và làm việc nhóm.
            </InfoBlock>
            <InfoBlock title="Mục tiêu cá nhân">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Trở thành sinh viên chủ động trong học tập, biết tự tìm kiếm và ứng dụng công nghệ hiệu quả.</li>
                <li>Phát triển tư duy phản biện, kỹ năng phân tích dữ liệu và làm việc nhóm chuyên nghiệp.</li>
                <li>Xây dựng thương hiệu cá nhân qua các sản phẩm số chất lượng và có trách nhiệm.</li>
                <li>Hướng tới việc kết nối kiến thức chuyên ngành với xu hướng chuyển đổi số toàn cầu.</li>
              </ul>
            </InfoBlock>
            <InfoBlock title="Mục tiêu Portfolio">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Hệ thống hóa toàn bộ các bài tập cuối kỳ.</li>
                <li>Chứng minh năng lực sử dụng công cụ số và AI trong học tập.</li>
                <li>Lưu trữ sản phẩm cá nhân để dễ truy cập, chia sẻ và phát triển.</li>
                <li>Rèn luyện kỹ năng trình bày, phân tích, phản biện và tự đánh giá.</li>
              </ul>
            </InfoBlock>

            {/* Lời chia sẻ cá nhân */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 border border-primary/20 green-glow">
              <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                <span>💬</span> Lời chia sẻ cá nhân
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed italic">
                “Mỗi bài tập trong môn học không chỉ là một nhiệm vụ cần hoàn thành, mà còn là cơ hội để em trải nghiệm sức mạnh của công nghệ số và AI trong học tập. Em học được cách tổ chức thông tin khoa học hơn, đặt câu hỏi thông minh hơn với AI, và đặc biệt là ý thức rõ trách nhiệm khi sử dụng công cụ tạo sinh. Portfolio này là minh chứng cho sự nỗ lực, kiên trì và niềm đam mê học hỏi của em.”
                {"\n"}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;—Nguyễn Phương Ly-
              </p>
            </div>
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
                {e.img ? (
                  <img src={e.img} alt={e.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/25 to-accent/20 grid-bg" />
                    <span className="relative text-6xl group-hover:scale-110 transition-transform">{e.icon}</span>
                  </>
                )}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-background/80 px-2 py-1 rounded-full">
                  #0{i + 1}
                </span>
              </div>
                <div className="p-5">
                  <h4 className="font-semibold mb-1">{e.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{e.desc}</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] px-2 py-1 rounded-full bg-primary/15 text-primary uppercase tracking-widest">Dự án {e.project}</span>
                    <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline truncate">{e.fileLabel} →</a>
                  </div>
                </div>

            </div>
          ))}
        </div>
      </Section>


      {/* ========== Skills ========== */}
      <Section id="skills" eyebrow="Skills Matrix" title="Bảng tổng hợp kỹ năng đạt được">
        <SkillsLineChart />
        <div className="grid md:grid-cols-2 gap-3 mt-8">
          {SKILLS.map((s, i) => (
            <div key={s.name} className="reveal flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className={`shrink-0 w-12 h-12 rounded-full grid place-items-center font-bold text-sm ${s.level === 100 ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"}`}>
                {s.level}%
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">#{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="font-semibold truncate">{s.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground/80">Ứng dụng:</strong> {s.use}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>


      {/* ========== Conclusion ========== */}
      <Section id="conclusion" eyebrow="Conclusion" title="Tổng kết & tự đánh giá">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hành trình xây Portfolio */}
          <div className="reveal p-6 rounded-2xl bg-card border border-border md:col-span-2">
            <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">📖 Hành trình xây dựng Portfolio</h4>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Với mình, việc bắt tay xây dựng một Digital Portfolio là một hành trình khá lạ nhưng rất đáng nhớ.
                Đây là lần đầu tiên mình vừa đóng vai người viết nội dung, vừa là người thiết kế và tổ chức toàn bộ
                một trang web cá nhân để tổng hợp các sản phẩm học tập trong học kỳ.
              </p>
              <p>
                Quá trình này giúp mình hiểu rõ hơn về giá trị của việc trình bày thông tin có cấu trúc: từ cách chia
                mục, chọn màu chủ đạo, đến việc căn chỉnh khoảng trắng để người xem dễ theo dõi. Song song đó, mình
                cũng có cơ hội nhìn lại cả chặng đường học, biết điểm nào bản thân đã tiến bộ và điểm nào cần luyện thêm.
              </p>
              <p>
                Điều mình bất ngờ nhất là công nghệ số khiến việc lưu trữ và chia sẻ tri thức trở nên linh hoạt hơn rất
                nhiều. Portfolio này không dừng lại ở một bài tập nộp cuối kỳ, mà sẽ tiếp tục được cập nhật như một
                “sổ tay số” cá nhân trong các học kỳ tiếp theo.
              </p>
            </div>
          </div>

          {/* Kiến thức & kỹ năng quan trọng nhất */}
          <div className="reveal p-6 rounded-2xl bg-card border border-border md:col-span-2">
            <h4 className="font-semibold mb-4 text-primary flex items-center gap-2">🏅 Kiến thức & kỹ năng nổi bật nhất</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  t: "Thao tác số nền tảng",
                  d: "Mình đã quen tay với các thao tác quản lý file như tạo mới, đổi tên, di chuyển và phân loại theo môn học. Kết hợp thêm việc tìm kiếm trên Google Scholar và đánh giá nguồn theo tiêu chí CRAAP giúp mình lọc được tài liệu chất lượng cho việc học.",
                },
                {
                  t: "Kiến thức về AI & Prompting",
                  d: "Mình nắm được nguyên lý hoạt động của các mô hình ngôn ngữ lớn và cách thiết kế prompt theo công thức RTF. Nhờ vậy, ChatGPT trở thành trợ lý học tập thay vì công cụ trả lời thay, đồng thời mình vẫn giữ được thói quen trích dẫn nguồn rõ ràng.",
                },
                {
                  t: "Ý thức liêm chính học thuật",
                  d: "Mình xem việc trung thực trong học tập là ưu tiên hàng đầu. Mọi sản phẩm trong Portfolio đều do mình trực tiếp thực hiện, có ghi chú rõ phần nào có sự hỗ trợ của AI và trích dẫn đầy đủ nguồn tham khảo.",
                },
                {
                  t: "Cộng tác & giao tiếp số",
                  d: "Qua các bài tập nhóm, mình rèn được kỹ năng phối hợp online: chia việc trên Trello, họp qua Meet, cùng chỉnh sửa tài liệu trên Google Docs và bám sát tiến độ chung của nhóm một cách chủ động hơn.",
                },
              ].map((it, i) => (
                <div key={i} className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="font-semibold text-primary mb-1 flex items-center gap-2">✓ {it.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Khó khăn & cách vượt qua */}
          <div className="reveal p-6 rounded-2xl bg-card border border-border md:col-span-2">
            <h4 className="font-semibold mb-4 text-primary flex items-center gap-2">⛰️ Thử thách gặp phải & cách mình vượt qua</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold mb-2">Thử thách:</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span>Cân đối thời gian khi cùng lúc chạy deadline của nhiều môn học khác nhau.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Làm quen với hàng loạt công cụ mới: Canva, Notion, Trello và các nền tảng AI.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Phân biệt tài liệu học thuật uy tín với nội dung nhiễu, thiếu kiểm chứng trên mạng.</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">Cách mình xử lý:</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">→</span>Lập kế hoạch học theo tuần, ưu tiên các đầu việc gần deadline và có trọng số cao.</li>
                  <li className="flex gap-2"><span className="text-primary">→</span>Dành thời gian xem hướng dẫn, làm theo từng bước và chủ động hỏi khi mắc kẹt.</li>
                  <li className="flex gap-2"><span className="text-primary">→</span>Áp dụng bộ tiêu chí CRAAP ở Chương 2 để sàng lọc và chọn lại nguồn tin đáng tin cậy.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Điều tự hào nhất */}
          <div className="reveal p-8 rounded-2xl bg-gradient-to-br from-primary/25 via-primary/15 to-secondary/20 border border-primary/30 md:col-span-2 green-spotlight">
            <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">💙 Điều mình tự hào nhất</h4>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Điều khiến mình tự hào nhất chính là khoảng cách rõ rệt giữa mình của đầu học kỳ và mình ở thời điểm
                hoàn tất Portfolio. Từ một sinh viên còn khá lóng ngóng với công cụ số, giờ đây mình đã có thể tự thiết
                kế một trang portfolio hoàn chỉnh và sử dụng AI như một trợ thủ đắc lực nhưng vẫn giữ được tư duy độc lập.
              </p>
              <p>
                Mình cũng thấy vui vì đã hoàn thành đủ 6 bài tập lớn với chất lượng chỉn chu, mỗi bài đều rút được
                bài học riêng và tốt hơn bài trước. Portfolio này không chỉ là bằng chứng cho những gì đã học được,
                mà còn là động lực để mình tiếp tục nâng cấp kỹ năng số ở các học kỳ sau.
              </p>
            </div>
          </div>

          {/* Cam kết liêm chính */}
          <div className="reveal md:col-span-2 p-8 rounded-2xl bg-card border border-primary/30 text-center">
            <h4 className="font-semibold text-primary flex items-center justify-center gap-2 mb-3">🔒 Cam kết Liêm chính Học thuật</h4>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Portfolio này được thực hiện với tinh thần học tập nghiêm túc. Toàn bộ nội dung đều do mình tự tìm hiểu,
              trực tiếp viết bằng ngôn ngữ của mình và có ghi chú rõ ràng khi có sự hỗ trợ của AI. Mình xem AI là công
              cụ đồng hành để mở rộng khả năng học tập, không phải thứ thay thế cho tư duy cá nhân. Mình cam kết tuân
              thủ các nguyên tắc liêm chính học thuật trong suốt quá trình học tập tại trường.
            </p>
            <div className="mt-5">
              <div className="font-semibold text-primary">— Trịnh Xuân An</div>
              <div className="text-xs text-muted-foreground">Sinh viên môn Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo</div>
            </div>
          </div>

          {/* Định hướng tương lai */}
          <div className="reveal p-6 rounded-2xl bg-card border border-border md:col-span-2">
            <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">🚀 Định hướng tiếp theo</h4>
            <ul className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                "Tiếp tục cập nhật Portfolio như một hồ sơ học tập & nghề nghiệp dài hạn.",
                "Ứng dụng kỹ năng số vào việc nghiên cứu, học nhóm và các dự án cá nhân.",
                "Rèn thói quen dùng AI có kiểm chứng, có trích nguồn và có trách nhiệm.",
              ].map((t, i) => (
                <li key={i} className="p-4 rounded-xl bg-primary/10 border border-primary/20">{t}</li>
              ))}
            </ul>
          </div>
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
              <li>Sinh viên: Nguyễn Phương Ly</li>
              <li>Môn học: Nhập môn CNS & Ứng dụng AI</li>
              <li>Năm học: 2025 – 2026</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Liên hệ</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>Email:25050977@vnu.edu.vn</li>
              <li>Trường:Đại học Kinh tế - ĐHQGHN</li>
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

function SkillsLineChart() {
  const W = 900;
  const H = 340;
  const padL = 48;
  const padR = 24;
  const padT = 30;
  const padB = 70;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const yMin = 85;
  const yMax = 100;
  const n = SKILLS.length;
  const x = (i: number) => padL + (chartW * i) / (n - 1);
  const y = (v: number) => padT + chartH * (1 - (v - yMin) / (yMax - yMin));
  const points = SKILLS.map((s, i) => `${x(i)},${y(s.level)}`).join(" ");
  const areaPath = `M ${x(0)},${padT + chartH} L ${points.split(" ").join(" L ")} L ${x(n - 1)},${padT + chartH} Z`;
  const gridVals = [85, 90, 95, 100];

  return (
    <div className="reveal rounded-2xl p-4 md:p-6 bg-white border border-blue-200 shadow-lg overflow-x-auto">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-blue-700">Biểu đồ dây – Mức độ đạt được (%)</h4>
        <span className="text-xs text-blue-500">Thang 85% – 100%</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto min-w-[640px]" role="img" aria-label="Biểu đồ đường mức độ kỹ năng">
        <defs>
          <linearGradient id="skillLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="skillArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid + Y labels */}
        {gridVals.map((v) => (
          <g key={v}>
            <line
              x1={padL}
              x2={W - padR}
              y1={y(v)}
              y2={y(v)}
              stroke={v === 100 ? "#3B82F6" : "#DBEAFE"}
              strokeDasharray={v === 100 ? "0" : "4 4"}
              strokeWidth={v === 100 ? 1.4 : 1}
            />
            <text x={padL - 10} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#1D4ED8">
              {v}%
            </text>
          </g>
        ))}

        {/* Area */}
        <path d={areaPath} fill="url(#skillArea)" />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="url(#skillLine)"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Dots + values + x labels */}
        {SKILLS.map((s, i) => {
          const cx = x(i);
          const cy = y(s.level);
          const isPeak = s.level === 100;
          return (
            <g key={s.name}>
              {isPeak && <circle cx={cx} cy={cy} r="12" fill="#3B82F6" opacity="0.2" />}
              <circle
                cx={cx}
                cy={cy}
                r={isPeak ? 7 : 5}
                fill={isPeak ? "#1D4ED8" : "#FFFFFF"}
                stroke="#1D4ED8"
                strokeWidth="2.5"
              />
              <text
                x={cx}
                y={cy - 14}
                textAnchor="middle"
                fontSize={isPeak ? 13 : 11}
                fontWeight={isPeak ? 700 : 600}
                fill="#1D4ED8"
              >
                {s.level}%
              </text>
              <text
                x={cx}
                y={H - padB + 20}
                textAnchor="middle"
                fontSize="11"
                fontWeight={600}
                fill="#1E3A8A"
              >
                {s.short}
              </text>
              <text
                x={cx}
                y={H - padB + 36}
                textAnchor="middle"
                fontSize="10"
                fill="#60A5FA"
              >
                #{String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>
    </div>

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
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-primary text-lg">📊</span>
          <h4 className="text-lg font-bold text-primary">Phân tích - Đánh giá</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl p-5 bg-primary/10 border border-primary/25 green-glow">
            <div className="font-semibold text-primary mb-3 flex items-center gap-2">✅ Điểm tốt</div>
            <ul className="text-sm text-foreground/85 space-y-2 list-disc pl-5">
              {p.strengths.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl p-5 bg-accent/25 border border-accent">
            <div className="font-semibold text-accent-foreground mb-3 flex items-center gap-2">🔧 Cần cải thiện</div>
            <ul className="text-sm text-foreground/85 space-y-2 list-disc pl-5">
              {p.improvements.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl p-5 bg-secondary/20 border border-secondary/40">
            <div className="font-semibold text-secondary-foreground mb-3 flex items-center gap-2">💡 Bài học rút ra</div>
            <ul className="text-sm text-foreground/85 space-y-2 list-disc pl-5">
              {p.lesson.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/25 green-glow">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-primary text-lg">🤖</span>
          <h4 className="text-lg font-bold text-primary">Liêm chính học thuật &amp; Sử dụng AI</h4>
        </div>
        <div className="mb-4">
          <div className="text-sm font-semibold mb-2">Cách tôi sử dụng AI:</div>
          <ul className="text-sm text-foreground/85 space-y-1.5">
            {p.aiUsage.map((s, i) => <li key={i} className="flex gap-2"><span className="text-primary">→</span><span>{s}</span></li>)}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2">Cam kết liêm chính:</div>
          <ul className="text-sm text-foreground/85 space-y-1.5">
            {p.integrity.map((s, i) => <li key={i} className="flex gap-2"><span className="text-primary">✓</span><span>{s}</span></li>)}
          </ul>
        </div>
      </div>

      {p.extra}


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
