import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCountry, deleteCountry } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useCreateCountry() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (data) => createCountry(data),
    onError: () => {
      toast.error("Error on create conutry", { duration: 5000 });
    },

    onSuccess: () => {
      toast.success("Country successfully created", { duration: 5000 });
      router.push("/manager/countries");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["countries"] });
    },
  });
}

export function useDeleteCountry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteCountry(id),
    onError: () => {
      toast.error("Error on delete conutry", { duration: 5000 });
    },

    onSuccess: () => {
      toast.success("Country successfully deleted", { duration: 5000 });
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["countries"] });
    },
  });
}
