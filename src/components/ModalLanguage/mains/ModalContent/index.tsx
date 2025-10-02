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

    <TabsContent value="language">
      <SelectLocale />
    </TabsContent>

    <TabsContent value="currency">
      <div className="mb-4">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Chọn loại tiền tệ
        </h3>
        {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelectedCurrency(currency.code)}
              className={`relative flex flex-col items-start rounded-lg border-2 p-4 text-left transition-all hover:border-gray-900 ${
                selectedCurrency === currency.code
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200"
              }`}
            >
              <div className="font-medium text-gray-900">{currency.name}</div>
              <div className="text-sm text-gray-600">
                {currency.code} - {currency.symbol}
              </div>
              {selectedCurrency === currency.code && (
                <Check className="absolute top-4 right-4 h-5 w-5 text-gray-900" />
              )}
            </button>
          ))}
        </div> */}
      </div>
    </TabsContent>
  </Tabs>
);

export default ModalContent;
