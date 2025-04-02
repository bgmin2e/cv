import Link from "next/link";

export default function Projects() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/"
        className="inline-block mb-8 text-blue-600 hover:underline"
      >
        ← 홈으로 돌아가기
      </Link>

      <h1 className="text-3xl font-bold mb-8 pb-2 border-b">Projects</h1>

      <div className="space-y-12">
        <section
          id="test-driven-development"
          className="border rounded-lg p-6 shadow-sm bg-white"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b text-blue-700">
            테스트 주도 개발 가이드 작성
          </h2>

          <div>
            <h4 className="font-semibold mb-2 text-lg">문제 상황</h4>

            <h5 className="font-medium mt-3 mb-1">Business</h5>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                환자 주민번호로 조회된 보험자격에 따라 8가지의 태그로 구분되어
                나타나야 합니다.
              </li>
              <li>
                보험자격 조회는 병원 진료 동선의 가장 첫번 째 단계이기 때문에,
                잘못된 보험자격 태그가 노출될 경우 이어지는 모든 진료 과정에 큰
                혼선을 줄 수 있습니다. 따라서 높은 정확도와 안정성이 요구되는
                기능입니다.
              </li>
            </ul>

            <h5 className="font-medium mt-3 mb-1">Tech</h5>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                환자의 보험자격 정보는 Back-end API 로 요청하여 알 수 있으며,
                Front-end 에서는 이 중 3가지의 field 를 조합해서 8가지의 태그로
                구분하고 있습니다.
              </li>
              <li>
                도메인이 복잡한 것에 비해 개발 명세서 내용이 부족하여 도메인
                지식이 없는 신규 개발자가 수정하기 어려운 상황입니다.
              </li>
              <li>
                기존 코드가 중첩된 if 문으로 작성되어 있어 리팩토링이
                시급했지만, 수정 도중 의도치 않은 로직 누수가 발생할 가능성이
                높습니다.
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">해결 과정</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                테스트 코드를 먼저 작성하고, 이를 통과하는 보험자격 조회 로직을
                작성하면 안정성을 보장할 수 있을 것이라고 판단했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>- Jest 라이브러리 초기 셋팅</li>
                  <li>- 시범적으로 보험자격 조회 기능의 Unit Test 부터 작성</li>
                  <li>
                    - 단순 테스트 목적 뿐 아니라, 개발 명세서로서의 역할도
                    수행할 수 있도록 BDD(Behavior-Driven Development) 컨셉 적용
                  </li>
                </ul>
              </li>
              <li>
                복잡한 도메인 로직을 다루는 데에 함수형 프로그래밍 기법이 도움이
                될 것이라고 판단했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>
                    - 의도치 않은 Side Effect 방지를 위해 React State 최소화 &
                    순수 함수로만 작성
                  </li>
                  <li>
                    - 보험자격 분류 로직과 UI Rendering 함수를 분리하여 테스트
                    소요 시간 최소화
                  </li>
                </ul>
              </li>
              <li>
                GitHub Action 에 테스트 절차 추가하여 통과하지 못하면 배포로
                이어지지 않도록 설정했습니다.
              </li>
              <li>
                위 내용을 토대로{" "}
                <Link
                  href="/test-code"
                  className="text-blue-600 hover:underline"
                >
                  가이드 문서
                </Link>
                를 작성하고, 팀 회의 시간에 공유했습니다.
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">결과</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                버그 없이 안전하게 보험자격 조회 로직 리팩토링을 완수할 수
                있었습니다.
              </li>
              <li>
                리팩토링에 두려움 없이 임할 수 있게 되어 DX 가 개선되었음을
                느꼈습니다.
              </li>
              <li>
                개발명세서가 마련되어 신규 개발자가 해당 도메인을 이해하는 데
                걸리는 시간을 줄일 수 있었습니다.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="sub-site-modularization"
          className="border rounded-lg p-6 shadow-sm bg-white"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b text-blue-700">
            하위 사이트 모듈화 및 자동 로그인 연동 구현
          </h2>

          <div>
            <h4 className="font-semibold mb-2 text-lg">문제 상황</h4>

            <h5 className="font-medium mt-3 mb-1">Business</h5>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                닥터팔레트(app.pltt.cloud)는 3시간 이상 아무런 유저 인터랙션이
                없을 경우 자동으로 로그인이 해제되어야 합니다.
              </li>
              <li>
                그러나 &apos;대기스크린&apos; 페이지는 병원에서 오랜 시간
                띄워두어야 하기에, 유저가 직접 로그아웃 하기 전까지 자동으로
                로그인을 해제하면 안됩니다.
              </li>
            </ul>

            <h5 className="font-medium mt-3 mb-1">Tech</h5>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                유저는 하나의 계정만 사용하기 때문에, 페이지 별로 다른 로그인
                인증 방식을 구현할 수 없습니다.
              </li>
              <li>
                대기스크린은 메인 웹과 목적이 다르기도 하고, 새롭게 추가되어야
                할 코드의 양이 방대하여 기존 Repository 의 설계 구조를 따르면
                코드의 복잡성이 높아질 수 있습니다.
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">해결 과정</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                로그인 인증 분리를 위해, 대기스크린 용
                도메인(waiting-screen.pltt.cloud) 을 만들었습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>- AWS Route53 으로 도메인 등록 및 DNS 라우팅 설정</li>
                  <li>
                    - 해당 도메인에서는 유저 인터랙션 여부를 체크하지 않도록 함
                  </li>
                </ul>
              </li>
              <li>
                한 번 더 로그인 해야하는 번거로움을 줄이고자 인증번호를 통한
                로그인 연동 방식을 도입했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>
                    - 닥터팔레트에서 받은 6자리 인증번호를 입력하면 자동으로
                    계정 연동
                  </li>
                </ul>
              </li>
              <li>
                대기스크린을 모듈화 했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>
                    - 마이크로 프론트엔드 아키텍처를 활용하여 기존 Repository 내
                    별도 모듈로 분리
                  </li>
                  <li>
                    - 독립적인 배포가 가능하도록 스크립트 작성 및 Github Action
                    수정
                  </li>
                </ul>
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">결과</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                유저의 이용 목적에 맞게 기능별로 인증 정책을 구분할 수 있게
                되었습니다.
              </li>
              <li>
                모듈화를 통해 Repository의 복잡성을 낮추고 유연성을 제고할 수
                있었습니다.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="storybook-design-system"
          className="border rounded-lg p-6 shadow-sm bg-white"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b text-blue-700">
            디자인 시스템 관리를 위한 스토리북 도입
          </h2>

          <div>
            <h4 className="font-semibold mb-2 text-lg">문제 상황</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>디자인 시스템이 존재하지만, Figma 로만 관리되고 있습니다.</li>
              <li>
                Figma 에는 간단한 스펙만 정의되어 있고, 세부적인 동작 방식은
                개발자와 디자이너 간 구두 논의로 정해지는 경우가 빈번합니다.
              </li>
              <li>
                개발이 완료된 후 디자이너가 이를 확인할 플레이그라운드가
                부재하기 때문에, 뒤늦게 오류를 발견하는 경우가 발생합니다.
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">해결 과정</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                디자인 컴포넌트 공유 및 협업을 위해 스토리북을 도입해야겠다고
                판단했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>- 스토리북 초기 환경 설정</li>
                  <li>
                    - 디자이너와 소통하여 컴포넌트 분류 기준 정리하고 폴더 구조
                    확립
                  </li>
                </ul>
              </li>
              <li>
                스토리북에서 제공하는 문서화 툴을 적극적으로 활용했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>- 컴포넌트의 사용법, 속성, 상태 등 정리</li>
                  <li>- 시각적으로 확인할 수 있도록 Use Case 별 예시 기입</li>
                </ul>
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">결과</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                디자인 시스템의 일관성을 유지하고 관리하는 데 큰 도움이
                되었습니다.
              </li>
              <li>
                UI 개발과 디자이너 간의 협업이 원활해져서 결과물의 퀄리티가
                높아졌습니다.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="mobile-web-ux"
          className="border rounded-lg p-6 shadow-sm bg-white"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b text-blue-700">
            모바일 웹 브라우징 사용성 개선
          </h2>

          <div>
            <h4 className="font-semibold mb-2 text-lg">문제 상황</h4>

            <h5 className="font-medium mt-3 mb-1">Business</h5>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                수술 또는 시술 전에 환자로부터 동의를 받아야 하는 상황에서,
                병원은 웹 기반의 동의서를 확인하고, 환자에게는 모바일로 URL을
                전송하여 접근하도록 합니다.
              </li>
            </ul>

            <h5 className="font-medium mt-3 mb-1">Tech</h5>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                모바일 웹 브라우징 환경에서 터치 시 onClick 이벤트가 부드럽게
                작동하지 않는다는 문제가 발견되었습니다.
              </li>
              <li>
                터치 할 때 대략 300ms 정도의 미세한 딜레이 후 onClick 이벤트에
                바인딩 된 함수가 실행되는 것이 확인되었습니다.
              </li>
              <li>
                사용자가 즉각적이라고 느끼는 최대 지연 시간은 100ms라는 점을
                감안했을 때, UX를 저하시키는 요인으로 작용하고 있습니다.
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">해결 과정</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                MDN 문서를 통해 모바일 환경에서 click 함수가 터치 이벤트 발생
                직후에 발생하지 않을 수 있음을 확인했습니다.
              </li>
              <li>
                터치 관련 이벤트 (touchstart, touchend) 와 클릭 관련 이벤트
                (click 등) 들을 실행시켜 보면서 이벤트 시퀀스를 확인했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>
                    - touchstart &gt; touchend &gt; click 순으로 이벤트 발생하는
                    점 확인
                  </li>
                </ul>
              </li>
              <li>
                PC에서는 click, 모바일에서는 touch 이벤트 리스너를 사용하는 것이
                적합하다고 판단했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>
                    - 모바일 기기인 경우 &quot;touch&quot;를, PC인 경우
                    &quot;click&quot; 을 반환하는 이벤트 타입 변환 함수 구현
                  </li>
                </ul>
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">결과</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                클릭 이벤트 딜레이 문제가 해결되어 터치 이벤트 반응 속도가
                향상되었고, 이로 인해 유저의 모바일 웹 브라우징 경험이
                개선되었습니다.
              </li>
              <li>
                공용 이벤트 타입 변환 함수를 통해 코드 중복이 최소화되었고,
                유지보수 및 확장성이 향상되었습니다.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="graphql-schema-design"
          className="border rounded-lg p-6 shadow-sm bg-white"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b text-blue-700">
            Frontend 주도 GraphQL Schema 설계
          </h2>

          <div>
            <h4 className="font-semibold mb-2 text-lg">문제 상황</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                빠른 개발 속도가 중요한 상황이기에 GraphQL 스키마 는 Backend에서
                설계하고, 이후 Front-end가 투입되는 방식으로 개발을 진행합니다.
              </li>
              <li>
                GraphQL 의 컨셉 상 버전 관리가 불가능하기에, Back-end에서 스키마
                변경 시 Frontend 에서 즉각적으로 대응을 해야합니다. 그렇지
                않으면 컴파일 타임과 런타임 에러가 발생할 수 있습니다.
              </li>
              <li>
                특히 런타임 에러인 경우 코드로 추적이 불가능하기 때문에, 미처
                발견하지 못하고 실 서비스로 배포되는 경우도 발생했습니다.
              </li>
              <li>
                Frontend 의 구조를 고려하지 않고 설계된 스키마 인 경우, 이를
                사용하기 위해 불필요한 보일러 플레이트 코드가 추가되기도 합니다.
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">해결 과정</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                GraphQL의 장점인 &apos;클라이언트에 최적화된 데이터&apos;를
                이용하기 위해, Frontend 가 주도적으로 스키마 설계에 참여하면
                좋을 것 같다고 생각했습니다.
              </li>
              <li>
                기획 문서와 디자인 문서를 파악한 후 .graphql 파일로 스키마를
                정의했습니다.
                <ul className="list-circle list-inside ml-8 text-gray-700">
                  <li>- 유저 액션에 기반하여 쿼리, 뮤테이션 정의</li>
                  <li>
                    - 화면을 구성하는 데 필요한 데이터 모델링 및 타입
                    (Interface, Union, Enum 등) 정의
                  </li>
                  <li>- 타입 내부에서 필요한 필드 정의</li>
                </ul>
              </li>
              <li>
                팀 노션에 스키마를 업로드하여, 수정 사항이 생길 경우 버전 정보를
                달아 관리했습니다.
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2 text-lg">결과</h4>
            <ul className="list-disc list-inside ml-4 text-gray-800">
              <li>
                GraphQL의 장점을 최대한 활용하여 Frontend 개발자들이 필요로 하는
                데이터를 쉽게 가져올 수 있게 되었습니다.
              </li>
              <li>
                한 번 합의된 스키마는 변경될 가능성이 적어, 스키마 변경에
                대응해야하는 시간이 감소했습니다.
              </li>
              <li>
                미처 발견하지 못한 런타임 에러를 방지하여 프로덕트의 안정성을
                높일 수 있었습니다.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
