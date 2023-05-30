export const navLinks = [
  { id: "about", title: "About" },
  {
    id: "experience",
    title: "Experience",
  },

  { id: "projects", title: "Projects" },
  {
    id: "contact",
    title: "Contact",
  },
];

export const roles = [
  { title: "Web Frontend Developer", icon: "/assets/web.png" },
];

export const experiences = [
  {
    title: "Solab 관리사이트 웹 프론트 개발",
    name: "소셜인베스팅랩(커피하우스)",
    iconBg: "#383E56",
    date: "2023.1.26 ~ 2023.4.25",
    points: [
      "사용자들이 업로드한 게시글들을 모아보고 인기게시글등록 및 사용정지여부를 등록할 수 있는 기능개발",
      "한 게시글에 등록된 댓글들을 일괄적으로 상태 변경 할 수 있는 기능 개발",
      "이미지들을 슬라이드로 일괄 확인하고 클릭시 모달을 통해 확대하여 확인할 수 있는 기능 개발",
      "테이블 컴포넌트에 툴팁을 내장하여 지정된 너비가 넘어가면 자동으로 말줄임 표시와 함께 툴팁이 적용되는 기능 개발",
    ],
  },
  {
    title: "프론트엔드 엔지니어링 과정 수료",
    name: "코드스테이츠",
    iconBg: "#E6DEDD",
    date: "2022.4.25 ~ 2022.10.19",
    points: [
      "HTML/CSS, 자바스크립트, 리액트, 네트워크, 자료구조/알고리즘, 컴퓨터공학기초, TDD 이론지식 습득",
      "서비스 기획 및 분석 부터 사용자요구사항정의서, 화면정의서, 피그마를 직접 정의하고 작성 해 본 경험",
      "Coz’s Git flow에 따른 브랜치 활용과 칸반 및 이슈를 사용 해 본 경험",
    ],
  },
];

export const skills = [
  {
    name: "HTML",
    icon: "/assets/skills/html.png",
  },
  { name: "CSS", icon: "/assets/skills/css.png" },
  { name: "Javascript", icon: "/assets/skills/javascript.png" },
  { name: "Typescript", icon: "/assets/skills/typescript.png" },
  { name: "Reactjs", icon: "/assets/skills/reactjs.png" },
  { name: "Nextjs", icon: "/assets/skills/nextjs.png" },
  { name: "Vite", icon: "/assets/skills/vite.png" },
];

export const projects = [
  {
    name: "Solab 관리사이트",
    description:
      "직원들의 업무 처리를 원활하게 하기 위해, 어드민 사이트를 구축",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/solab.png",
  },
  {
    name: "Sera's portfolio",
    description:
      "사용자가 인터랙션을 통해 콘텐츠를 탐색 가능하며, 모바일 및 데스크탑에서 모두 잘 보이는 반응형 포트폴리오 사이트",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "recoil",
        color: "green-text-gradient",
      },
      {
        name: "emotion",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/portfolio.png",
    source_code_link: "https://github.com/quessr/sera-portfolio",
  },
  {
    name: "Pygmalihome",
    description: "LH, SH 청약공고를 모아보고 청약일 알림을 보내주는 서비스",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/pygmalihome.png",
    source_code_link: "https://github.com/quessr/pygmalihome",
  },
  {
    name: "Mocco",
    description:
      "온라인 상에서 스터디를 진행하고, 서로의 결과물을 캐릭터의 움직임을 통해 시각화 하여 확인할 수 있는 서비스",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "recoil",
        color: "green-text-gradient",
      },
      {
        name: "emotion",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/mocco.png",
    source_code_link: "https://github.com/quessr/mocco",
  },
];
