import Navbar from "@/app/components/navBar";

export default function AboutPage() {
  return (
      <main className="min-h-screen bg-gray-100">
        
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center"></div>
        <Navbar />
  
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-4xl font-bold text-blue-600">
            🏠 This is the About Page
          </h1>
          {/* <p className="mt-4 text-lg text-gray-700">
            Welcome! You’ve successfully logged in 🎉
          </p> */}
          console.log("About Page Rendered");
        </div>
      </main>
    );
}
