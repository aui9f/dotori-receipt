import {
  BeakerIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import FormButton from "../components/form-button";
import FormInput from "../components/form-input";
//https://heroicons.com/
//https://www.npmjs.com/package/@heroicons/react

export default function CreateAccount() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="mb-24">
        <div className="mb-8 text-center">
          <span>
            <UserGroupIcon className="w-8 m-auto" />
          </span>
          <h4>로그인</h4>
        </div>
        <form className="w-96">
          <div className="flex flex-col gap-2">
            <FormInput
              type="text"
              placeholder="아이디"
              required
              errors={[]}
            ></FormInput>

            <FormInput
              type="Password"
              placeholder="비밀번호"
              required
              errors={[]}
            ></FormInput>
          </div>
          <p className="mt-4 mb-4 size">Error Message</p>
          <FormButton loading={true} text="로그인" />
        </form>
      </div>
    </div>
  );
}
