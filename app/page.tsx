import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Home Care Management
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A UK-compliant platform for staff management and care planning.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
          
          <div className="space-y-4">
            <div className="text-left bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">✅ Setup Complete</h3>
              <p className="text-sm text-blue-800">
                You've successfully cloned the repository and installed dependencies.
              </p>
            </div>

            <div className="text-left bg-yellow-50 p-4 rounded">
              <h3 className="font-semibold text-yellow-900 mb-2">⏭️ Next Steps</h3>
              <ol className="text-sm text-yellow-800 list-decimal list-inside space-y-1">
                <li>Create your <code className="bg-white px-1">.env.local</code> file (see README)</li>
                <li>Connect Supabase database</li>
                <li>Build user authentication</li>
                <li>Create client records feature</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/toyets/Home-care"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Repository
          </a>
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            Go to Login
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-600">
          <p>📚 <a href="#" className="text-blue-600 hover:underline">View Documentation</a></p>
        </div>
      </div>
    </main>
  );
}
