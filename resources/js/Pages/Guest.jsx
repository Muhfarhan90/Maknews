import GuestLayout from "@/Pages/Layouts/GuestLayout";

export default function Guest() {
    return (
        <GuestLayout>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome to the Guest Page
                </h1>
                <p className="mt-4 text-gray-600">
                    This is a simple guest page layout.
                </p>
            </div>
        </GuestLayout>
    );
}
