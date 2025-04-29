export default function ComingSoon() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Em Breve
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            Estamos preparando algo incrível para você.
          </p>
          <div className="flex justify-center items-center">
            <div className="w-20 h-20 border-t-4 border-blue-500 rounded-full animate-spin"></div>
          </div>
          <p className="mt-6 text-lg">Fique ligado!</p>
        </div>
      </div>
    );
  }
  