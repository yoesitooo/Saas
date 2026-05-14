export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="mt-4 flex flex-col gap-4">
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <button className="p-2 bg-blue-600 text-white rounded">Sign In</button>
      </form>
    </div>
  )
}
