// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SelectLocale from "../../components/SelectLocale";

const ModalContent = () => (
  <Tabs defaultValue="language">
    <TabsList className="mb-10 h-11 space-x-4 bg-transparent p-0">
      <TabsTrigger
        value="language"
        className="border-primary cursor-pointer rounded-none border-0 data-[state=active]:border-b-1 data-[state=active]:shadow-none"
      >
        Ngôn ngữ và khu vực
      </TabsTrigger>
      <TabsTrigger
        value="currency"
        className="border-primary cursor-pointer rounded-none border-0 data-[state=active]:border-b-1 data-[state=active]:shadow-none"
      >
        Loại tiền tệ
      </TabsTrigger>
    </TabsList>

    <TabsContent value="language" asChild>
      <SelectLocale />
    </TabsContent>

    <TabsContent value="currency"></TabsContent>
  </Tabs>
);

export default ModalContent;
