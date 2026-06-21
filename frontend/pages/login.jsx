export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-6 rounded-xl w-96">
        <h1 className="text-xl mb-4">ورود به پنل مدیریت</h1>

        <input
          className="w-full p-2 mb-3 text-black"
          placeholder="رمز ورود"
        />

        <button className="bg-blue-600 w-full p-2 rounded">
          ورود
        </button>

        <p className="text-xs mt-4 text-gray-400">
          Owner: @Iranianv0
        </p>
      </div>
    </div>
  );
}