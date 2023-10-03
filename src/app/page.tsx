import InputForm from "@/components/InputForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-6xl font-bold text-transparent bg-clip-text">
        CIC
      </div>

      <div>
        <InputForm />
      </div>
    </main>
  )
}
