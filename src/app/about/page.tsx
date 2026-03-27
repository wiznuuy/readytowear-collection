import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="px-5 py-12 max-w-xl mx-auto">
      {/* Title */}
      <div className="mb-10">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#888] mb-2">
          Ready to wear collection in Seoul
        </p>
        <h1 className="font-serif font-light text-4xl tracking-wide">
          2026 — Identity
        </h1>
      </div>

      {/* Photo */}
      <div className="mb-10 bg-[#ede8df]">
        <Image
          src="https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/images/about.jpeg"
          alt="2026 Identity Collection"
          width={0}
          height={0}
          sizes="(max-width: 640px) 100vw, 576px"
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Site note */}
      <p className="font-sans text-sm text-[#c8c4be] leading-relaxed mb-8">
        본 사이트는 포트폴리오 사이트입니다.
        <br />
        추후 해당시즌 팀원 등 아티스트와 연결 된 활동은 해당 사이트를 통해
        추가적으로 업로드 예정입니다.
      </p>

      <hr className="border-[#2a2a2a] mb-8" />

      {/* Identity text */}
      <div className="mb-10">
        <h2 className="font-serif font-light text-2xl mb-6">Identity</h2>
        <div className="font-sans text-sm text-[#c8c4be] leading-[2] space-y-5">
          <p>
            창작을 시작하는 학생을 포함한 많은 초기 디자이너들은 짧은 시간
            안에 결과를 만들어내야 하는 환경 속에서, 자신의 기준을
            세우기보다 눈에 띄는 디자인을 우선하게 된다. 빠르게 증명해야
            한다는 압박은 자연스럽게 더 강한 표현, 더 자극적인 결과를
            요구하고, 그 과정에서 정작 본인이 무엇을 만들고 싶은지에 대한
            질문은 뒤로 밀리게 된다.
          </p>
          <p>
            이러한 흐름은 단순한 선택의 문제가 아니라 구조적인 문제에
            가깝다. 배움의 시간이 충분하지 않고, 결과를 보여줘야 하는
            시점은 빠르게 다가오기에, 그 사이에서 많은 창작자들은 자신의
            색을 정의하지 못한 채 타인의 기준이나 시장의 반응을 따라가게
            되고 결국 화려함은 남지만, 창작자만의 방향은 흐려진다.
          </p>
          <p>
            우리는 이 지점에서 하나의 질문을 다시 꺼내고자 했다.
            &lsquo;지금 만들고 있는 이 결과가 정말 자신의 선택인가.&rsquo;
            이번 프로젝트는 그 질문에 대한 각자의 답을 형태로 풀어내는
            과정이자, 결과보다 기준을 먼저 세우는 시도를 보여주기 위한
            장이었다.
          </p>
          <p>
            이 쇼를 통해 우리는 단순히 옷을 보여주는 것이 아니라,
            창작자가 자신의 기준을 어떻게 설정하고 유지하는지에 대해
            노출하고자 한다. 겉으로 드러나는 디자인 이전에, 그 안에 어떤
            생각과 방향이 존재하는지를 드러내는 것이 이 런웨이의 핵심이다.
          </p>
          <p>
            앞으로의 방향 또한 이와 크게 다르지 않다. 우리는 단기적인
            결과나 일회성 표현에 집중하기보다, 각자의 &lsquo;Identity&rsquo;를
            지속적으로 탐구하고 확장하는 작업을 이어가고자 한다.
          </p>
          <p>
            다양한 창작자와 디자이너들이 자신의 색을 찾고, 그것을 유지할
            수 있는 환경과 기준에 대해 고민하며, 단순한 결과물이 아닌
            과정과 방향이 축적되는 작업을 만들어갈 것이다.
          </p>
        </div>
      </div>

      <hr className="border-[#2a2a2a] mb-8" />

      {/* Note */}
      <div className="font-sans text-xs text-[#aaa] leading-relaxed space-y-1 mb-8">
        <p>정기적인 활동은 없음을 알립니다.</p>
        <p>새 프로젝트 참여 의사와 지원 등 여러 활동 컨택 가능합니다.</p>
        <p>학생 디자이너의 활동을 적극적으로 지원합니다.</p>
      </div>

      <hr className="border-[#2a2a2a] mb-8" />

      {/* Credits */}
      <div className="font-sans text-sm text-[#c8c4be] space-y-5 pb-16">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#888] mb-1">
            Contact
          </p>
          <p className="text-xs leading-relaxed">
            런웨이 디렉/담당자_
            <br />
            홍준호{' '}
            <a
              href="mailto:hroffjfl@gmail.com"
              className="text-[#aaa] hover:text-[#f0ece6] transition-colors"
            >
              hroffjfl@gmail.com
            </a>
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#888] mb-1">
            2026 작업자_
          </p>
          <div className="text-xs leading-relaxed space-y-1">
            <p>
              Photographer:{' '}
              <a
                href="mailto:jadeisahardstone@gmail.com"
                className="text-[#aaa] hover:text-[#f0ece6] transition-colors"
              >
                jadeisahardstone@gmail.com
              </a>
            </p>
            <p>
              Videographer:{' '}
              <a
                href="mailto:jhshin8208@gmail.com"
                className="text-[#aaa] hover:text-[#f0ece6] transition-colors"
              >
                jhshin8208@gmail.com
              </a>
            </p>
            <p>
              Hair:{' '}
              <a
                href="https://instagram.com/g.a.m.y.i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aaa] hover:text-[#f0ece6] transition-colors"
              >
                @g.a.m.y.i
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
