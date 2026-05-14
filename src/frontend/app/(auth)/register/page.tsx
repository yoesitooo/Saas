export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Register</h1>
      <form className="mt-4 flex flex-col gap-4">
        <input type="text" placeholder="Business Name" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <button className="p-2 bg-blue-600 text-white rounded">Create Account</button>
      </form>
    </div>
  )
}
