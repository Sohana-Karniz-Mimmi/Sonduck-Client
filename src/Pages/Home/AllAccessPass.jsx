import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { MdCheckCircleOutline } from "react-icons/md";

const data = [
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Yearly",
    value: "yearly",
  },
];

const plans = [
  {
    title: "Regular",
    monthlyPrice: 25,
    yearlyPrice: 40,
    description: "For new creators building their list",
    features: [
      "5 downloads per day",
      "Access to all products",
      "Access to new releases",
      "25% renewal discount",
    ],
  },
  {
    title: "Basic",
    monthlyPrice: 120,
    yearlyPrice: 180,
    description: "For growing creators expanding their reach",
    features: [
      "10 downloads per day",
      "Access to all products",
      "Access to new releases",
      "25% renewal discount",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 320,
    yearlyPrice: 550,
    description: "For established creators maximizing impact",
    features: [
      "Unlimited downloads per day",
      "Access to all products",
      "Access to new releases",
      "25% renewal discount",
    ],
  },
];

const AllAccessPass = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div className="px-4 py-10 sm:px-6 md:px-8 lg:px-16 xl:px-24 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800"
        >
          All-Access Pass
        </Typography>
        <Typography
          variant="paragraph"
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Hear from our satisfied clients and learn how we've helped them take
          their businesses to new heights.
        </Typography>

        <Tabs value={activeTab} className="mt-8">
          <TabsHeader className="bg-[#F5F5F5] rounded-lg p-1">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`w-32 sm:w-40 md:w-48 py-2 text-sm sm:text-base font-semibold ${
                  activeTab === value
                    ? "text-white bg-[#FF689A] rounded-md"
                    : "text-gray-700"
                }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-xl"
            >
              <div>
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="mb-6 p-0"
                >
                  <Typography
                    variant="h5"
                    className="text-xl font-semibold text-[#FF689A]"
                  >
                    {plan.title}
                  </Typography>

                  <div className="mt-4 flex items-baseline text-gray-800">
                    <Typography
                      variant="h2"
                      className="text-4xl sm:text-5xl font-bold"
                    >
                      $
                      {activeTab === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className="ml-1 text-lg sm:text-xl font-medium text-gray-600"
                    >
                      /{activeTab}
                    </Typography>
                  </div>

                  <Typography
                    variant="paragraph"
                    className="mt-4 text-sm sm:text-base text-gray-600"
                  >
                    {plan.description}
                  </Typography>
                </CardHeader>

                <CardBody className="p-0">
                  <ul className="flex flex-col gap-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <MdCheckCircleOutline className="text-[#FF387A] text-2xl" />
                        <Typography className="text-sm sm:text-base text-gray-700">
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </div>

              <CardFooter className="mt-8 p-0">
                <Button
                  size="lg"
                  className="w-full bg-[#FF387A] text-white hover:bg-[#ff206a] transition-all"
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAccessPass;
