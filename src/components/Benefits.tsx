import { Gift, Clock, Star, CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    icon: Gift,
    title: '免费权益',
    value: '3位',
    unit: '优质推荐',
    description: '内测期间，每位用户可免费获得 3 位精准匹配的优质嘉宾推荐',
    highlight: true,
  },
  {
    icon: Clock,
    title: '快速响应',
    value: '5秒',
    unit: '内回复',
    description: 'AI 红娘实时在线，秒级理解需求，快速返回推荐结果',
    highlight: false,
  },
  {
    icon: Star,
    title: '优质资源',
    value: '100%',
    unit: '实名认证',
    description: '所有推荐嘉宾均经过实名认证，真实可靠，品质有保障',
    highlight: false,
  },
]

const advantages = [
  '基于大模型的语义理解',
  'Embedding 向量精准匹配',
  '对话式自然交互体验',
  '已推荐智能去重过滤',
  '严格的隐私保护机制',
  '7×24小时在线服务',
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 
                        font-medium text-sm mb-4">
            <Gift className="w-4 h-4" />
            <span>用户权益</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            内测专属 <span className="gradient-text">免费福利</span>
          </h2>
          <p className="text-lg text-gray-600">
            限时开放内测资格，零成本体验 AI 红娘的智能匹配服务
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`card p-6 lg:p-8 text-center relative overflow-hidden ${
                benefit.highlight ? 'ring-2 ring-violet-500 ring-offset-2' : ''
              }`}
            >
              {benefit.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-violet-500 to-primary-600 
                              text-white text-xs font-medium px-3 py-1 rounded-bl-xl">
                  限时免费
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center
                            ${benefit.highlight ? 'bg-gradient-to-br from-violet-500 to-primary-600 shadow-lg shadow-violet-500/30' : 'bg-violet-100'}`}>
                <benefit.icon className={`w-8 h-8 ${benefit.highlight ? 'text-white' : 'text-violet-600'}`} />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold gradient-text">{benefit.value}</span>
                <span className="text-lg text-gray-600 ml-1">{benefit.unit}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 lg:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              为什么选择AI红娘
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((advantage) => (
                <div key={advantage} className="flex items-center gap-3 p-3 rounded-xl hover:bg-violet-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
