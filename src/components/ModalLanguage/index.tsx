// libs
import { Globe } from "lucide-react";
// components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import ModalContent from "./mains/ModalContent";
import CustomButton from "../CustomButton";

const ModalLanguage = () => (
  <>
    <Dialog>
      <DialogTrigger>
        <CustomButton
          className="rounded-xl border-2 shadow-lg has-[>svg]:p-2"
          variant={"outline"}
        >
          <Globe className="text-primary size-4" />
        </CustomButton>
      </DialogTrigger>
      <DialogContent className="w-5xl sm:max-w-[calc(100%-2rem)]">
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        <ModalContent />
      </DialogContent>
    </Dialog>
  </>
);

export default ModalLanguage;
