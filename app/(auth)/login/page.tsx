
import LoginForm from "@/components/forms/login";
import Link from "@/components/small/link-with-loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-700">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              <a href="#" className="text-purple-600 hover:underline">
                Forgot your password?
              </a>
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
