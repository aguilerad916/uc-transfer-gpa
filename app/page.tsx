
import GPAChecker from './GPAChecker';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-900">UC GPA Eligibility Checker</h1>
        <p className="text-center text-gray-600">
          Enter your GPA and major to check your eligibility for UC schools.
        </p>
        <GPAChecker />
        <footer className="text-center text-sm text-gray-500 mt-8">
          Note: This tool provides estimates based on GPA only. Actual admissions decisions consider many factors.
        </footer>
      </div>
    </main>
  );
}