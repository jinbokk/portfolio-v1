// import eesocake from "/public/images/portfolio_eesocake.png"
// import jinbokNews from "/public/images/portfolio_jinbokNews.png"
// import musicor from "/public/images/portfolio_musicor_edited.png"
// import netflix from "/public/images/portfolio_netflix.png"

const md = require("markdown-it")({
  linkify: true,
});

export default async function Readme({ project }: { project: string }) {
  const getReadme = async () => {
    // GitHub API 엔드포인트 URL
    const url = `https://api.github.com/repos/jinbokk/${project}/readme`;

    // GitHub 리포지토리 정보
    try {
      // README 파일 가져오기
      const response = await fetch(url);
      const data = await response.json();
      // Base64로 인코딩된 README 내용 디코딩
      const decodedContent = Buffer.from(data.content, "base64").toString(
        "utf-8"
      );
      return decodedContent;
    } catch (error) {
      console.log("README 파일을 가져올 수 없습니다.", error);
    }
  };

  const readmeContent = await getReadme();

  return (
      <div
        id="readme"
        dangerouslySetInnerHTML={{ __html: md.render(readmeContent) }}
      ></div>
  );
}
