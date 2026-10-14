import type { ReactNode } from "react";

type Platform = "小红书" | "知乎" | "抖音";
type KeywordStatus = "监控中" | "已暂停";
type LeadIntent = "高" | "中" | "低";
type LeadStatus = "待跟进" | "已联系" | "已成交";

const badgeBase =
  "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium";

const platformStyles: Record<Platform, string> = {
  小红书: "border-rose-500/30 bg-rose-500/15 text-rose-300",
  知乎: "border-sky-500/30 bg-sky-500/15 text-sky-300",
  抖音: "border-cyan-500/30 bg-cyan-500/15 text-cyan-300",
};

const keywordStatusStyles: Record<KeywordStatus, string> = {
  监控中: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
  已暂停: "border-slate-500/40 bg-slate-500/15 text-slate-300",
};

const intentStyles: Record<LeadIntent, string> = {
  高: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
  中: "border-amber-500/30 bg-amber-500/15 text-amber-300",
  低: "border-slate-500/40 bg-slate-500/15 text-slate-300",
};

const leadStatusStyles: Record<LeadStatus, string> = {
  待跟进: "border-amber-500/30 bg-amber-500/15 text-amber-300",
  已联系: "border-sky-500/30 bg-sky-500/15 text-sky-300",
  已成交: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
};

const keywords: {
  keyword: string;
  platform: Platform;
  status: KeywordStatus;
  triggers: number;
}[] = [
  { keyword: "XX怎么选", platform: "小红书", status: "监控中", triggers: 12 },
  { keyword: "求推荐XX", platform: "抖音", status: "监控中", triggers: 9 },
  { keyword: "XX价格", platform: "知乎", status: "监控中", triggers: 7 },
  { keyword: "XX靠谱吗", platform: "小红书", status: "已暂停", triggers: 4 },
  { keyword: "XX和XX哪个好", platform: "知乎", status: "监控中", triggers: 14 },
];

const responses: {
  question: string;
  answer: string;
  platform: Platform;
  time: string;
}[] = [
  {
    question: "XX怎么选？第一次接触，怕踩坑",
    answer:
      "选XX主要看三个维度：一是需求匹配度，先明确自己的使用场景和预算区间；二是真实案例与口碑，重点看带图的中长期反馈，而不是只看宣传页；三是售后与质保条款，问清保修范围和响应时效。具体可以根据你的预算私信我，我帮你逐条对比，推荐几个更合适的选择。",
    platform: "小红书",
    time: "09:12",
  },
  {
    question: "求推荐XX，预算5000左右有推荐吗",
    answer:
      "5000 这个档位建议优先看性价比款，把预算集中在核心配置上，附加功能可以适当取舍。我整理过一份同价位的横向对比清单，包含配置差异和常见套路。把你最在意的点私信告诉我，我帮你从里面挑出两三个最合适的选择。",
    platform: "抖音",
    time: "10:35",
  },
  {
    question: "XX价格一般是多少？会不会有隐形消费",
    answer:
      "价格通常由三部分构成：基础产品或服务费、实施安装费用、后期维护费用。报价差异大，多数是因为包含的项目不同。签之前一定让对方列一份明细报价，并确认有无增项条款。需要的话私信我，我发你一份常用的报价明细模板，照着问就不容易被坑。",
    platform: "知乎",
    time: "11:20",
  },
  {
    question: "XX靠谱吗？看到评价褒贬不一",
    answer:
      "评价两极分化很正常，关键看差评集中在哪里：如果多是交付周期和沟通问题，一般属于管理问题；如果涉及质量或合同纠纷，就要谨慎。建议再查一下商家的经营年限和实际案例。可以私信我，我发你一份整理好的考察清单，按清单核对一遍基本就能判断靠不靠谱。",
    platform: "小红书",
    time: "13:47",
  },
];

const leads: {
  name: string;
  platform: Platform;
  intent: LeadIntent;
  need: string;
  status: LeadStatus;
}[] = [
  {
    name: "王先生",
    platform: "小红书",
    intent: "高",
    need: "想找本地装修公司，预算10万左右",
    status: "待跟进",
  },
  {
    name: "李女士",
    platform: "知乎",
    intent: "高",
    need: "全屋定制已看3家，需要横向对比报价",
    status: "已联系",
  },
  {
    name: "张老板",
    platform: "抖音",
    intent: "中",
    need: "门店装修，月底前要开工",
    status: "已成交",
  },
  {
    name: "陈小姐",
    platform: "小红书",
    intent: "中",
    need: "想了解XX价格区间，还在观望",
    status: "待跟进",
  },
  {
    name: "刘先生",
    platform: "知乎",
    intent: "低",
    need: "只是随便问问，暂无明确时间表",
    status: "已联系",
  },
  {
    name: "赵女士",
    platform: "抖音",
    intent: "高",
    need: "老房翻新，希望两周内签约",
    status: "待跟进",
  },
];

function Panel({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-700/60 bg-[#1e293b] p-5 shadow-lg shadow-black/20">
      <h2 className="mb-4 flex items-center gap-2.5 text-base font-semibold text-white">
        <span className={`h-4 w-1 rounded-full ${accent}`} aria-hidden />
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <h1 className="text-lg font-semibold tracking-tight text-white">
            AI获客代理 · 演示版
          </h1>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-300">运行中</span>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        <Panel title="监控中的关键词" accent="bg-emerald-400">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-4 py-3 text-xs font-medium tracking-wide text-slate-400">
                    关键词
                  </th>
                  <th className="px-4 py-3 text-xs font-medium tracking-wide text-slate-400">
                    平台
                  </th>
                  <th className="px-4 py-3 text-xs font-medium tracking-wide text-slate-400">
                    状态
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium tracking-wide text-slate-400">
                    今日触发次数
                  </th>
                </tr>
              </thead>
              <tbody>
                {keywords.map((item) => (
                  <tr
                    key={item.keyword}
                    className="border-b border-slate-700/40 transition-colors last:border-0 hover:bg-slate-700/30"
                  >
                    <td className="px-4 py-3.5 font-medium text-white">
                      {item.keyword}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`${badgeBase} ${platformStyles[item.platform]}`}>
                        {item.platform}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`${badgeBase} ${keywordStatusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right text-slate-300">
                      <span className="font-semibold text-white">
                        {item.triggers}
                      </span>
                      <span className="ml-1 text-xs text-slate-500">次</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="最近自动响应" accent="bg-indigo-400">
          <ul className="space-y-4">
            {responses.map((item) => (
              <li
                key={item.question}
                className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`${badgeBase} ${platformStyles[item.platform]}`}>
                    {item.platform}
                  </span>
                  <span className="text-xs text-slate-500">今天 {item.time}</span>
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-md border border-slate-600 bg-slate-700/60 px-1.5 py-0.5 text-[10px] font-medium text-slate-300">
                    用户
                  </span>
                  <p className="text-sm font-medium text-white">{item.question}</p>
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-md border border-indigo-500/30 bg-indigo-500/15 px-1.5 py-0.5 text-[10px] font-medium text-indigo-300">
                    AI
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="今日高意向线索" accent="bg-amber-400">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-4 py-3 text-xs font-medium tracking-wide text-slate-400">
                    用户昵称
                  </th>
                  <th className="px-4 py-3 text-xs font-medium tracking-wide text-slate-400">
                    来源平台
                  </th>
                  <th className="px-4 py-3 text-xs font-medium tracking-wide text-slate-400">
                    意向评分
                  </th>
                  <th className="px-4 py-3 text-xs font-medium tracking-wide text-slate-400">
                    关键需求摘要
                  </th>
                  <th className="px-4 py-3 text-xs font-medium tracking-wide text-slate-400">
                    状态
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.name}
                    className="border-b border-slate-700/40 transition-colors last:border-0 hover:bg-slate-700/30"
                  >
                    <td className="px-4 py-3.5 font-medium text-white">
                      {lead.name}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`${badgeBase} ${platformStyles[lead.platform]}`}>
                        {lead.platform}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`${badgeBase} ${intentStyles[lead.intent]}`}>
                        {lead.intent}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-slate-300">{lead.need}</td>
                    <td className="px-4 py-3.5">
                      <span className={`${badgeBase} ${leadStatusStyles[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-8 text-[11px] text-slate-500 sm:px-6">
        AI获客代理 · 7×24 小时自动监控高意向线索 · 支持定制部署
      </footer>
    </div>
  );
}
