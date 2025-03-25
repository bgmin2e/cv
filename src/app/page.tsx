import Link from "next/link";
import { FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-6">
        <div className="flex flex-col print:flex-row md:flex-row gap-4 items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/profile.png"
              alt="profile-image"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">백경민</h1>
            <p className="text-xl text-gray-600 mb-3">
              Front-end Software Engineer
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href="mailto:bgmin2e@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <FaEnvelope /> bgmin2e@gmail.com
              </Link>
              <Link
                href="https://github.com/bgmin2e"
                target="_blank"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <FaGithub /> bgmin2e
              </Link>
              <Link
                href="https://medium.com/@bgmin2e"
                target="_blank"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <FaGlobe /> medium/@bgmin2e
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 자기소개 섹션 */}
      <section className="mb-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-3 shadow-md">
        <h2 className="text-base font-bold mb-1 text-indigo-800">
          안녕하세요!
        </h2>
        <p className="text-gray-700 text-sm">
          집단지성의 힘을 믿는 개발자 백경민 입니다.
          <br />
          혼자 일할 때보다, 좋은 팀원들과 함께 의미 있는 결과를 만들어낼 때 더
          큰 성취감을 느낍니다.
          <br />
          앞으로도 묵묵히 제 역할을 해내며, 팀에 긍정적인 영향을 주는 개발자로
          성장하고 싶습니다.
        </p>
      </section>

      {/* 경력 섹션 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Occupations</h2>

        <div className="mb-8">
          <div className="flex flex-wrap justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">코드잇</h3>
            <span className="text-gray-600">2024.08 ~ 2025.02</span>
          </div>

          <p className="mb-4 text-gray-700 bg-gray-50 p-4 rounded-md text-sm">
            코드잇 프론트엔드 부트캠프에서 강사로 활동하며, 약 50명의 수강생을
            대상으로 코드리뷰와 멘토링을 진행했습니다. <br />
            또한 HTML/CSS 기초부터 Next.js를 활용한 실무형 프로젝트까지 다양한
            주제로 강의를 기획하고 진행했습니다. <br />
            아래는 제가 준비한 강의 내용을 블로그에 정리한 내용입니다:
          </p>

          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li>
              <Link
                href="https://medium.com/@bgmin2e/nextjs-%EB%94%A5%EB%A7%81%ED%81%AC-%EB%AA%A8%EB%8B%AC-%EA%B5%AC%ED%98%84-%EC%98%88%EC%8B%9C-67db4a414ed9"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                NextJS Intercepting Route로 딥링크 모달 구현하기
              </Link>
            </li>
            <li>
              <Link
                href="https://medium.com/@bgmin2e/nextjs-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-zustand-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4-%EA%B3%B5%EC%8B%9D%EB%AC%B8%EC%84%9C%EB%A5%BC-%EC%9D%BD%EC%96%B4%EB%B3%B4%EB%8D%98-%EC%A4%91-%EC%95%84%EB%9E%98%EC%99%80-%EA%B0%99%EC%9D%80-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%A5%BC-%EB%B3%B4%EA%B2%8C%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%A0%84%EB%AC%B8%EC%9D%80-%EC%97%AC%EA%B8%B0%EB%A5%BC-%EC%B0%B8%EA%B3%A0%ED%95%98%EC%8B%9C%EB%A9%B4-%EB%90%A9%EB%8B%88%EB%8B%A4-e635b652a504"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                SSR 환경에서 Zustand 사용 시 주의해야 할 점
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">위버케어 (구 메디블록)</h3>
            <span className="text-gray-600">2021.03 ~ 2024.07</span>
          </div>

          <div className="flex flex-row items-stretch gap-2 mb-4 bg-gray-50 rounded-md">
            <div className="flex-shrink-0 w-2/6 rounded-l-md overflow-hidden flex justify-center items-center">
              <img
                src="/drpalette-mobile.png"
                alt="drpalette"
                className="max-h-[180px] object-cotain"
              />
            </div>
            <div className="flex-grow w-4/6 p-2 text-gray-700 break-keep rounded-md text-sm overflow-auto flex justify-center flex-col">
              <span>
                클라우드 EMR 서비스인{" "}
                <Link
                  href="https://dr.pltt.cloud/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  닥터팔레트
                </Link>
                를 개발했습니다.
              </span>{" "}
              EMR이란 병원에서 사용하는 진료 기록 프로그램을 의미합니다.
              <br />
              계약 병원 수 0곳일 때 팀에 합류하여 200곳 이상의 병원이 계약할
              때까지 함께하였습니다.
              <br />
              Web 및 Mobile 프론트엔드 개발을 담당했으며, 주요 프로젝트는 다음과
              같습니다:
            </div>
          </div>

          <ul className="list-disc list-inside ml-4 text-gray-800 space-y-1">
            <li>
              <Link
                href="/projects#test-driven-development"
                className="text-blue-600 hover:underline"
              >
                테스트 주도 개발 가이드 작성
              </Link>
            </li>
            <li>
              <Link
                href="/projects#sub-site-modularization"
                className="text-blue-600 hover:underline"
              >
                하위 사이트 모듈화 및 자동 로그인 연동 구현
              </Link>
            </li>
            <li>
              <Link
                href="/projects#storybook-design-system"
                className="text-blue-600 hover:underline"
              >
                디자인 시스템 관리를 위한 스토리북 도입
              </Link>
            </li>
            <li>
              <Link
                href="/projects#mobile-web-ux"
                className="text-blue-600 hover:underline"
              >
                모바일 웹 브라우징 사용성 개선
              </Link>
            </li>
            <li>
              <Link
                href="/projects#graphql-schema-design"
                className="text-blue-600 hover:underline"
              >
                Front-end 주도 GraphQL Schema 설계
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex flex-wrap justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">KT 플레이디</h3>
            <span className="text-gray-600">2019.06 ~ 2020.08</span>
          </div>

          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li>광고기획 업무 담당</li>
          </ul>
        </div>
      </section>

      {/* 사이드 프로젝트 섹션 */}
      <section className="mb-12 print:break-inside-avoid-page">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Side Projects</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="https://github.com/bgmin2e/gentle-mail"
            className="block border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <img src="/gentle-mail.png" className="w-full h-36 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">GentleMail</h3>
              <p className="text-gray-600 text-sm">
                K-직장인 정서에 맞춰 이메일 작성을 돕는
                <br />
                AI 기반 Chrome Extension
              </p>
            </div>
          </Link>
          <Link
            href="https://github.com/bgmin2e/classic-wordle"
            className="block border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src="/classic-wordle.png"
              alt="Classic Wordle"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Classic Wordle</h3>
              <p className="text-gray-600 text-sm">가장 클래식한 Wordle 게임</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mb-12 print:break-inside-avoid-page">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 print:grid-cols-2 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Languages</h3>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>TypeScript, Dart</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Frameworks</h3>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>React, NextJS</li>
              <li>Flutter</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              State management tools
            </h3>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>React Context API, Zustand, Redux</li>
              <li>Flutter BLoC</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">API technology</h3>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>GraphQL, React Query, RestAPI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">CSS</h3>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>Tailwind, Shadcn UI, Styled Component</li>
            </ul>
          </div>
        </div>
      </section>
      {/* 학력 */}
      <section className="mb-12 print:break-inside-avoid-page">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Education</h2>
        <div className="flex flex-wrap justify-between items-start">
          <h3 className="text-lg font-semibold">중앙대학교, 광고홍보학과</h3>
          <span className="text-gray-600">2014.03 - 2018.02</span>
        </div>
      </section>
    </main>
  );
}
