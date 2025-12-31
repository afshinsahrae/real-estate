// hooks/usePublishActions.js
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function usePublishActions() {
  const router = useRouter();

  const publishHandler = async (_id) => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();

    if (result.message) {
      router.push("/admin");
      router.refresh();
      toast.success(result.message);
    }
  };

  const deleteHandler = async (_id) => {
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "DELETE",
    });
    const result = await res.json();

    if (result.error) {
      toast.error(result.error);
    } else {
      router.push("/admin");
      router.refresh();
      toast.success(result.message);
    }
  };

  return { publishHandler, deleteHandler };
}
