import { UserPlus, MessageCircle, Users, ChevronRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: '添加专属红娘',
    description: '扫码添加企业微信，获得你的专属 AI 红娘，开启智能匹配之旅',
    color: 'bg-violet-500',
    lightColor: 'bg-violet-100',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: '描述择偶要求',
    description: '像聊天一样告诉红娘你的想法，比如"175以上、硕士学历、爱运动的男生"',
    color: 'bg-primary-500',
    lightColor: 'bg-primary-100',
  },
  {
    number: '03',
    icon: Users,
    title: '查看推荐结果',
    description: 'AI 智能分析匹配，为你推荐 3 位最符合条件的优质嘉宾',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-100',
  },
]

export default function Steps() {
  return (
    <section id="steps" className="py-24 bg-gradient-to-b from-white via-violet-50/50 to-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 
                        font-medium text-sm mb-4">
            <ChevronRight className="w-4 h-4" />
            <span>简单三步</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            轻松开启 <span className="gradient-text">寻爱之旅</span>
          </h2>
          <p className="text-lg text-gray-600">
            无需繁琐注册，不用填写长篇资料，三步即可开始智能匹配
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-0.5 
                        bg-gradient-to-r from-violet-200 via-primary-200 to-purple-200" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="card p-6 lg:p-8 text-center group hover:-translate-y-2 h-full">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`inline-block px-3 py-1 rounded-full ${step.lightColor} ${step.color.replace('bg-', 'text-')} 
                                   font-bold text-sm`}>
                      步骤 {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mt-4 mb-6 rounded-2xl ${step.color} 
                                flex items-center justify-center shadow-lg shadow-violet-500/20
                                group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ChevronRight className="w-6 h-6 text-violet-300 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Example Chat */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="card p-6 bg-gradient-to-br from-violet-50 to-white border-violet-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-primary-600 
                            flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">AI 红娘</div>
                <div className="text-xs text-gray-500">在线</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-violet-100 max-w-[80%]">
                  <p className="text-gray-700">收到！我是你的专属 AI 红娘 🤖</p>
                  <p className="text-gray-700 mt-1">请告诉我你想找什么样的 TA？</p>
                </div>
              </div>
              <div className="flex items-start gap-2 justify-end">
                <div className="bg-gradient-to-r from-violet-500 to-primary-600 rounded-2xl rounded-tr-none 
                              px-4 py-3 shadow-md max-w-[80%]">
                  <p className="text-white">我想找175以上、在上海、硕士学历、性格温柔的男生</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-violet-100 max-w-[80%]">
                  <p className="text-gray-700">我理解你想找：<span className="text-violet-600 font-medium">【上海】【175cm+】【硕士】【性格温柔】</span> 的男生，对吗？</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
