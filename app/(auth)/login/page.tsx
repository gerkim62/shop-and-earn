import LoginForm from "@/components/forms/login";
import Link from "@/components/small/link-with-loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import app from "@/constants/app";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Image
            className="w-12 h-12 rounded-full mx-auto"
            src={"/logo.jpeg"}
            height={48}
            width={48}
            alt="Logo"
          ></Image>
          <CardTitle className="text-2xl font-bold text-center text-purple-700">
            Login to {app.name}
          </CardTitle>
        </CardHeader>
        <CardDescription>
          <p className="text-center text-sm text-gray-600 mb-4 -mt-6">
            Login to your account and continue shopping.
          </p>
        </CardDescription>
        <CardContent>
          <LoginForm />
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              <Link
                href="/forgot-password"
                className="text-purple-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </p>
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-purple-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
