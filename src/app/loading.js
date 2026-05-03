export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">

      <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-600 font-medium text-sm md:text-base">
        Loading please wait...
      </p>

    </div>
  );
}