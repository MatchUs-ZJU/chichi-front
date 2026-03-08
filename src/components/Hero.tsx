import { Sparkles, ArrowRight, MessageCircle, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-100/50 to-transparent rounded-full" />
        
        {/* Floating elements */}
        <div className="absolute top-32 right-[15%] w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float">
          <Sparkles className="w-8 h-8 text-violet-500" />
        </div>
        <div className="absolute bottom-40 left-[10%] w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
          <MessageCircle className="w-7 h-7 text-primary-500" />
        </div>
        <div className="absolute top-1/3 right-[8%] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
          <Users className="w-6 h-6 text-violet-400" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 
                        font-medium text-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>AI 驱动 · 智能匹配</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            <span className="text-gray-900">让</span>
            <span className="gradient-text"> AI 红娘</span>
            <br />
            <span className="text-gray-900">帮你找到那个</span>
            <span className="gradient-text">TA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            基于大模型语义理解，懂你所想
            <br className="hidden sm:block" />
            告别繁琐筛选，对话式精准匹配，让缘分来得更自然
          </p>

          {/* Free Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 
                        text-amber-700 font-semibold mb-10 shadow-sm">
            <span className="text-lg">🎁</span>
            <span>内测期间免费领取 3 个优质推荐</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="btn-primary text-lg flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              立即免费匹配
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#steps"
              className="btn-secondary text-lg w-full sm:w-auto justify-center"
            >
              了解流程
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-violet-100">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">10万+</div>
              <div className="text-gray-500 text-sm">优质用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">95%</div>
              <div className="text-gray-500 text-sm">匹配满意度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">3步</div>
              <div className="text-gray-500 text-sm">简单开始</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
