import { Heart, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-primary-600 
                            flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold gradient-text">赤赤说媒</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-sm leading-relaxed">
              AI 驱动的智能婚恋匹配平台，基于大模型语义理解，让每一次相遇都更有可能。
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:contact@chichi.com" 
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center
                         hover:border-violet-300 hover:bg-violet-50 transition-all duration-200"
              >
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
              <a 
                href="tel:400-xxx-xxxx" 
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center
                         hover:border-violet-300 hover:bg-violet-50 transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-violet-600 transition-colors">功能介绍</a>
              </li>
              <li>
                <a href="#steps" className="text-gray-600 hover:text-violet-600 transition-colors">使用流程</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-violet-600 transition-colors">用户权益</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">关于</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">关于我们</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">隐私政策</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">用户协议</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} 赤赤说媒. All rights reserved.
            </p>
            
            {/* ICP 备案区域 - 预留 */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-gray-400 text-xs">
                ICP备案号：浙ICP备2023016045号
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
