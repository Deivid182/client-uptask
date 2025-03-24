import { Button } from "@/presentation/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/presentation/components/ui/input-otp";
import { VerifyUserViewModel } from "./view-model";
export default function Verify() {
  const { onSubmit, form } = VerifyUserViewModel();
  return (
    <>
      <div className="bg-gray-100 p-4 md:p-8 rounded-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full items-center max-w-xl mx-auto">
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mx-auto my-1">Enter the token received by email</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={!form.formState.isValid || form.formState.isSubmitting || !form.formState.isDirty} type="submit">Validate</Button>
          </form>
        </Form>
      </div>
      {/* <nav className="mt-10 flex flex-col gap-4">
        <Link to="/auth/register" className="text-sm text-gray-100 cursor-pointer hover:underline text-center">
          Don&apos;t have an account? Register
        </Link>
      </nav> */}
    </>
  );
}
