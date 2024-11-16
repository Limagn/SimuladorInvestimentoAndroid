import { View } from "react-native"
import { InvestmentsHeader } from "@/components/ui/InvestmentsHeader";

export function InvestmentFunds () {

  return (
    <View className="flex-1 bg-background">
      <InvestmentsHeader title="Fundos de Investimento"/>
    </View>
  )
}