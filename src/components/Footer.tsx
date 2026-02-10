export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FrameMarket</h3>
            <p className="text-gray-400">
              專為電子相框設計的照片市場平台，連接創作者與使用者。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">探索</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">熱門照片</a></li>
              <li><a href="#" className="hover:text-white transition">最新上架</a></li>
              <li><a href="#" className="hover:text-white transition">精選創作者</a></li>
              <li><a href="#" className="hover:text-white transition">主題分類</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">關於</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">關於我們</a></li>
              <li><a href="#" className="hover:text-white transition">成為創作者</a></li>
              <li><a href="#" className="hover:text-white transition">常見問題</a></li>
              <li><a href="#" className="hover:text-white transition">聯絡我們</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">法律</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">使用條款</a></li>
              <li><a href="#" className="hover:text-white transition">隱私政策</a></li>
              <li><a href="#" className="hover:text-white transition">授權說明</a></li>
              <li><a href="#" className="hover:text-white transition">版權保護</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FrameMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
