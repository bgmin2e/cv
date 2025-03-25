import Link from "next/link";

export default function TestCodeGuide() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/projects"
        className="inline-block mb-8 text-blue-600 hover:underline"
      >
        ← 프로젝트로 돌아가기
      </Link>

      <h1 className="text-3xl font-bold mb-8 pb-2 border-b">
        프론트엔드에서 테스트 코드의 필요성에 대한 고찰
      </h1>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-4">배경</h2>
        <p>
          접수는 현재 제가 작업하고 있는 프로덕트(닥터팔레트)에서 가장 중요한
          기능 중 하나라고 할 수 있습니다. 환자를 접수할 수 없다면 진단을 내릴
          수 없기 때문입니다. 그 중에서도 <strong>보험정보</strong>는 해당
          환자의 수납, 청구 등에도 영향을 미치기 때문에 버그가 발생하면
          프로덕트에 꽤나 큰 영향을 미치게됩니다.
        </p>
        <br />
        <p>
          이 보험정보가 간단히 2-3가지 케이스로만 구분되면 좋겠지만, 비즈니스
          규칙 상 FE에서 약 8가지의 케이스로 구분하여 케이스 별로 각기 다른 UI
          를 보여줘야 했습니다. 이 복잡한 로직을 처리하는 기존 코드는 3중으로
          중첩된 if-else 문들로 이루어져 있었습니다.
        </p>
        <br />
        <p>
          가독성이 상당히 떨어지는 코드였습니다. 만약 이 로직의 버그가 발견되면
          빠르게 핫픽스로 배포를 해야할텐데, 하필 접수를 잘 모르는 개발자만
          깨어있는 상황이라면 히스토리를 파악하는 데에만 긴 시간이 걸릴 것
          같다는 우려도 들었습니다.
        </p>
        <br />
        <p>
          리팩토링이 시급해 보였으나 한편으로는 잘못 건드려서 잘 돌아가고 있는
          기능을 망가트릴 것 같아 두려운 마음이 들어 선뜻 손이 가지 않았습니다.
          그래서 접수모달의 보험정보를 검증할 수 있는 테스트 코드를 먼저
          작성해보기로 결심하게 되었습니다.
        </p>
        <br />

        <h2 className="text-2xl font-bold mb-4">테스트코드 작성 여정</h2>

        <h3 className="text-xl font-bold mb-4">1. 요구사항 파악</h3>
        <p>
          테스트코드 작성에 앞서 가장 먼저 한 것은 요구사항을 파악하는
          일이었습니다. 아쉽게도 개발을 위한 명세서가 따로 있는건 아니었기
          때문에, 피그마와 QA용 명세서를 참고하여 FE 개발용 명세를 새롭게
          정리했습니다.
        </p>
        <br />
        <p>
          BE로 부터 받아오는 <code>보험정보</code> 데이터에 따라, FE 에서는 아래
          표와 같이 카테고리와 UI 상태를 정의할 수 있었습니다. (실제로는 총
          8개의 케이스가 있었으며, 이 곳에선 이해를 위해 간단히 3가지의 케이스만
          나열하겠습니다.)
        </p>

        <div className="overflow-x-auto my-6">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">카테고리</th>
                <th className="border px-4 py-2">UI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">보험자격 조회실패</td>
                <td className="border px-4 py-2">
                  조회 실패 warning icon 렌더
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">건강보험</td>
                <td className="border px-4 py-2">건강보험 tag 렌더</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">의료급여</td>
                <td className="border px-4 py-2">의료급여 tag 렌더</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4">
          2. 테스트하기 쉽게 함수 쪼개기
        </h3>
        <p>
          기존 코드는 보험정보와 관련된 모든 로직이 하나의 함수에
          뭉쳐져있었습니다. 보험정보 카테고리를 구하는 함수는 비즈니스 규칙이고,
          UI 렌더링은 DOM 을 업데이트 하는 일인데 두 로직이 하나로 모여있어
          테스트 코드에서 불필요하게 확인해야 할 사항이 많아보였습니다.
        </p>
        <br />
        <p>
          그래서 저는 테스트를 더 쉽게 하기 위해 DOM 업데이트와 비즈니스 규칙을
          분리하기로 했습니다.
        </p>
        <br />
        <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
          <code>
            1. 보험정보에 따라 보험정보 카테고리를 구하는 함수 <br />
            2. 보험정보 카테고리에 따라 그에 맞는 UI 를 렌더하는 함수
          </code>
        </pre>
        <br />
        <p>
          이렇게 함수를 분리하니, 필요에 맞게 테스트코드를 작성할 수
          있게되었습니다. 제가 테스트하고 싶었던 것은 접수정보 카테고리를
          분류하는 비즈니스 규칙이었기 때문에 테스트 코드를 더 심플하게 작성할
          수 있었고, 분리한 함수는 다른 컴포넌트에서 재사용하기 쉬워졌습니다.
        </p>
        <br />
        <p>
          또한, 함수가 결괏값을 리턴하도록 수정했습니다. 기존 코드는 React의
          state를 사용해서 함수 외부에 있는 값을 변경해주고 있었기에, 테스트
          코드 환경에서 해당 값을 확인할 수가 없었습니다. 그래서 일단 기존
          로직은 건드리지 않고 결괏값만 함수 안에서 리턴하도록 수정했습니다.
        </p>
        <br />
        <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
          <code>
            {`// 이해를 위해 각색한 코드입니다.
enum 보험정보_타입 {
  실패,  
  건강보험,
  의료급여,
  건강보험_자격제한
}

const 보험정보_분류 = (보험정보: 건강보험 | 의료급여| null): 보험정보_타입 => {
  if (보험정보===null) {
    return 보험정보_타입.실패;
  }

  if (보험정보.__typename === '건강보험') {
    return 보험정보_타입.건강보험;
  }

  if (보험정보.__typename === '의료급여') {
    return 보험정보_타입.의료급여
  }
};`}
          </code>
        </pre>
        <br />
        <h3 className="text-xl font-bold mb-4">
          3. 가능한 human-friendly 한 관점의 테스트코드 작성
        </h3>
        <p>
          위에서 언급했듯, 이번 테스트코드의 목적엔 디버깅도 있었지만 사실 FE
          개발자들의 DX 개선을 위함이 더 컸습니다. 접수 도메인을 잘 아는
          사람이라면 코드 가독성이 조금 떨어져도 이해할 수 있겠지만, 도메인을 잘
          모른다면 한번에 이해하기 어려운 기능이기 때문입니다. 게다가 닥팔 팀의
          점점 규모가 커지면서 새롭게 입사하는 개발자분들이 많아지고 있는데,
          이런 복잡한 로직이 진입장벽으로 느껴질 것 같았습니다.
        </p>
        <br />
        <p>
          그래서 이번 테스트 코드는{" "}
          <strong>BDD(Behavior-driven development)</strong> 테스트 라는 개념을
          참고해서 가능한 human-friendly한, 비개발자가 보더라도 이해할 수 있는
          테스트를 작성해보려고 했습니다.
        </p>
        <br />
        <p>
          이를 위해 jest-context-plugin 라이브러리를 이용해 해당 테스트가 어떤
          context에 해당하는지 보다 명시적으로 표현해주었습니다. 그리고
          팁이라기엔 사소하지만.. 각 테스트 케이스를 설명할 때 일부 변수명을
          제외하고는 한글을 사용했습니다. 워낙 용어가 어렵다보니 영어로 작성하면
          난독이 배가 될 것 같았기 때문입니다.
        </p>
        <br />

        <h2 className="text-2xl font-bold mb-4">결과</h2>
        <p>
          위와 같은 고민을 거쳐서 최종적으로 이런 테스트 코드를 구현했습니다.
        </p>
        <br />
        <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
          <code>
            {`//이해를 위해 각색한 코드입니다.
describe('보험정보를 카테고리 별로 분류한다', () => {
  context('0. 자격조회를 실패한 경우', () => {
    it('실패 를 리턴한다', () => {
      const 보험정보 = null;
      const result = 보험정보_분류(qualification);

      expect(result).toBe(보험정보_타입.실패);
    });
  });

  context('1. 건강보험 일 때', () => {
    context('1-1. 급여제한 항목이 없을 때', () => {
      it('건강보험 을 리턴한다', () => {
        const qualification = {
          ...건강보험 mock data generator,
        };
        const result = 보험정보_분류(qualification);

        expect(result).toBe(보험정보_타입.건강보험);
      });
    });
    context('1-2. 급여제한 항목이 있을 때', () => {
        ...
    });
  });
  
  context('2. 의료급여 일 때', () => {
     it('AID 를 리턴한다', () => {
       const qualification = {
         ...의료급여 mock data generator,
       };
       const result = 보험정보_분류(qualification);
        expect(result).toBe(보험정보_타입.의료급여);
      });
  });
}`}
          </code>
        </pre>
        <br />
        <p>
          테스트 코드를 작성해보니 제가 느낀 가장 큰 장점은 리팩토링에 용기가
          생긴다는 점입니다. 만약 리팩토링 중에 실수를 하더라도 테스트 코드에서
          어느 부분이 틀렸는지 잡아줄 것이라는 믿음이 있기에 부담없이 시도할 수
          있었습니다.
        </p>
        <br />
        <p>
          또한 테스트 코드를 FE 개발 명세서의 용도로 사용할 수 있다는 점도 큰
          장점으로 느껴졌습니다. 한 번 잘 정리해두면 굳이 피그마나 기획 문서를
          찾아 헤맬 필요가 없으니 편했습니다. 추후 신규 개발자가 해당 부분에
          새로운 기능을 추가해야 하는 경우에도, 테스트 코드의 description 을
          보고 히스토리를 파악할 수 있으니 진입장벽을 낮추는 데에도 도움이 될 것
          같습니다.
        </p>
        <br />
        <p>
          그러나 테스트 코드는 제 예상보다도 더 많은 리소스를 필요로 하는
          작업이었습니다. 분명 장점도 많지만, 들어간 리소스를 고려했을 때 그만한
          가치가 있냐? 라고 물어본다면.. 쉽게 대답하지 못할 것 같습니다. 오히려
          기도가 더 싸게 먹힐 수도 있습니다..ㅎㅠㅠ
        </p>
        <br />
        <p>
          결국 테스트 코드를 작성할 때 중요한 건 &apos;우선 순위&apos;가 될 것 같습니다.
          모든 케이스를 커버하려기보단 정말 테스트가 필요한 기능이 무엇인지
          기준을 잡는게 중요하다고 생각합니다. User Funnel 의 진입점에 위치한
          기능일수록, 다른 도메인과 연결된 점이 많을수록 테스트 코드를
          작성해두는게 좋을 것 같습니다. 저희 닥터팔레트에서는 환자 검색, 환자
          생성, 접수 생성, 진단 및 처방 생성 등 정도가 될 것 같네용
        </p>
        <br />
        <h2 className="text-2xl font-bold mb-4">
          고민되는 점 or 개선해야하는 점
        </h2>
        <ol>
          <li>
            테스트 코드는 테스트 하려는 코드(파일)에 가깝게 위치하는게 좋을 것
            같아 해당하는 폴더 하위에 <code>__tests__</code> 폴더를 만들어
            두었습니다. 만약 mock data가 필요하다면 <code>mocks</code> 폴더를
            만들어 관리하면 좋을 것 같습니다. 혹시 더 깔끔한 방법이 있다면 제안
            부탁드립니다 ㅎㅎ
          </li>
          <li>
            graphql schema 가 변경되면 mock data의 type 이 깨질 가능성이
            있습니다. graphql-codegen-typescript-mock-data 라이브러리를
            시도해봤으나 schema 속 모든 모델에 대한 mock data가 생성이 되어
            보류해두었습니다. 다른 라이브러리를 찾아보던가 아니면 내부적으로
            mock data를 생성해주는 util을 만들어서 사용해도 좋을 것 같습니다.
          </li>
        </ol>
      </article>
    </main>
  );
}
