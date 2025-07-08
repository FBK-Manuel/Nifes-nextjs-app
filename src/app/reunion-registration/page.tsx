import Link from "next/link";
import RegisterReForm from "../components/RegistrationReForm";

export default function ReunionRegistration() {
  return (
    <div>
      <div className="mb-5">
        <nav className="bg-blue-200 rounded font-bold">
          <ul className="flex justify-center space-x-4 p-4">
            <li>
              <Link
                href="/register"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Retreat Registration
              </Link>
            </li>
            <li>
              <Link
                href="/reunion-registration"
                className="text-gray-600 hover:text-[#e5408f]"
              >
                Reunion Registration
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="min-h-screen p-4">
        <RegisterReForm />
      </main>
    </div>
  );
}
