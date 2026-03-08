import { Brain, MessageSquare, Shield, Zap, Target, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI 智能匹配',
    description: '基于大模型语义理解，深度分析你的择偶需求，精准推荐最合适的TA',
    color: 'from-violet-500 to-primary-600',
    bgColor: 'bg-violet-50',
  },
  {
    icon: MessageSquare,
    title: '对话式交互',
    description: '像聊天一样告诉红娘你的要求，支持自然语言描述，告别繁琐表单',
    color: 'from-primary-500 to-purple-600',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Target,
    title: '精准推荐',
    description: 'Embedding 向量检索技术，从多维度计算匹配度，只推真正合适的人',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Zap,
    title: '即时响应',
    description: 'AI 实时处理你的需求，秒级返回推荐结果，无需漫长等待',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Shield,
    title: '隐私保护',
    description: '严格的数据加密和隐私协议，你的信息只用于匹配，绝不外泄',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: HeartHandshake,
    title: '人工复核',
    description: 'AI 推荐 + 人工审核双重保障，确保每位推荐嘉宾的真实可靠',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 
                        font-medium text-sm mb-4">
            <Zap className="w-4 h-4" />
            <span>核心功能</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            为什么选择 <span className="gradient-text">AI 红娘</span>
          </h2>
          <p className="text-lg text-gray-600">
            结合最先进的人工智能技术与专业的婚恋服务理念，为你打造专属的寻爱体验
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card p-6 lg:p-8 group hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 
                            group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text`}
                            style={{ 
                              color: feature.color.includes('violet') ? '#8b5cf6' : 
                                     feature.color.includes('primary') ? '#9333ea' :
                                     feature.color.includes('purple') ? '#a855f7' :
                                     feature.color.includes('amber') ? '#f59e0b' :
                                     feature.color.includes('emerald') ? '#10b981' : '#f43f5e'
                            }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
