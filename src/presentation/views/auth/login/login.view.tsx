import { Link } from "react-router-dom";
import { Button } from "@/presentation/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { LoginUserViewModel } from "./view-model";
export default function Login() {
  const { onSubmit, form } = LoginUserViewModel();
  return (
    <>
      <div className="bg-gray-100 p-4 md:p-8 rounded-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-xl mx-auto">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="lM2d1@example.com" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
      <nav className="mt-10 flex flex-col gap-4">
        <Link to="/auth/register" className="text-sm text-gray-100 cursor-pointer hover:underline text-center">
          Don&apos;t have an account? Register
        </Link>
      </nav>
    </>
  );
}
