"use client";

import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard 
       title="Customer & Expenses"
       primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
       dateRange="22 - 29 October 2025"
       details={[
        {
          title: "Customer Growth",
          amount: "250",
          changePercentage: 0.5,
          iconComponent: TrendingUp,
        },
        {
          title: "Expenses",
          amount: "$2,500",
          changePercentage: -0.2,
          iconComponent: Package,
        },
      ]}
      />
      <StatCard 
       title="Dues & Pending Orders"
       primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
       dateRange="22 - 29 October 2025"
       details={[
        {
          title: "Dues",
          amount: "250.00",
          changePercentage: 0.7,
          iconComponent: TrendingUp,
        },
        {
          title: "Pending Orders",
          amount: "145",
          changePercentage: -21,
          iconComponent: TrendingDown,
        },
      ]}
      />
      <StatCard 
       title="Sales & Discount"
       primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
       dateRange="22 - 29 October 2025"
       details={[
        {
          title: "Sales",
          amount: "5340",
          changePercentage: 10,
          iconComponent: TrendingUp,
        },
        {
          title: "Discount",
          amount: "90",
          changePercentage: -5,
          iconComponent: TrendingDown,
        },
      ]}
      />
    </div>
  );
};

export default Dashboard;
