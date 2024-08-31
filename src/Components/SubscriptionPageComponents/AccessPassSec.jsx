
import { Button, Card, CardBody, CardFooter, CardHeader, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
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
    }
];

const AccessPassSec = () => {

    const [tabs , setTabs] = useState('monthly') ;

    return (
        <div className="w-[1250px] mx-auto flex flex-col items-center gap-3">
            
            <h1 className="gro text-5xl font-semibold">All-access pass</h1>
            <p className="gro text-xl w-[589px] text-center font-medium">Hear from our satisfied clients and learn how we've helped them take their businesses to new heights.</p>

            <div className="mt-12 grid grid-cols-3 gap-8 w-full mb-10">

                <Card className="w-full p-8">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-4 rounded-none"
                    >
                        <Typography
                        variant="small"
                        color="black"
                        className="gro font-medium text-[#FF689A] text-xl"
                        >
                            Regular
                        </Typography>

                        <Typography
                        variant="h1"
                        color="black"
                        className="mt-6 mb-2 flex gap-1 text-5xl font-normal"
                        >
                            ${tabs === 'monthly' ? '25' : '40'}
                        <span className="self-end text-2xl">{tabs === 'monthly' ? '/month' : '/year'}</span>
                        </Typography>

                        <p className="gro text-xl font-medium text-black">For new creators building their list</p>

                        <Tabs value="monthly" className="mt-5">
                            <TabsHeader className="gro bg-[#F5F5F5] rounded-lg">
                                {data.map(({ label, value }) => (
                                    <Tab key={value} value={value} onClick={() => setTabs(value)}>
                                        <p className={`gro font-semibold ${tabs !== value ? "text-black" : "text-[#FF689A]"}`}>{label}</p>
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>

                    </CardHeader>

                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">5 downloads per day</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">Access to all products</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">Access to new releases</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">25% renewal discount</Typography>
                            </li>
                        </ul>
                    </CardBody>

                    <CardFooter className="mt-6 p-0">
                        <Button
                        size="lg"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#FF387A]"
                        ripple={false}
                        fullWidth={true}
                        >
                            Select Plan
                        </Button>
                    </CardFooter>

                </Card>

                <Card className="w-full p-8">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-4 rounded-none"
                    >
                        <Typography
                        variant="small"
                        color="black"
                        className="gro font-medium text-[#FF689A] text-xl"
                        >
                            Basic
                        </Typography>

                        <Typography
                        variant="h1"
                        color="black"
                        className="mt-6 mb-2 flex gap-1 text-5xl font-normal"
                        >
                            ${tabs === 'monthly' ? '120' : '180'}
                        <span className="self-end text-2xl">{tabs === 'monthly' ? '/month' : '/year'}</span>
                        </Typography>

                        <p className="gro text-xl font-medium text-black">For new creators building their list</p>

                        <Tabs value="monthly" className="mt-5">
                            <TabsHeader className="gro bg-[#F5F5F5] rounded-lg">
                                {data.map(({ label, value }) => (
                                    <Tab key={value} value={value} onClick={() => setTabs(value)}>
                                        <p className={`gro font-semibold ${tabs !== value ? "text-black" : "text-[#FF689A]"}`}>{label}</p>
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>

                    </CardHeader>

                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">10 downloads per day</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">Access to all products</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">Access to new releases</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">25% renewal discount</Typography>
                            </li>
                        </ul>
                    </CardBody>

                    <CardFooter className="mt-6 p-0">
                        <Button
                        size="lg"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#FF387A]"
                        ripple={false}
                        fullWidth={true}
                        >
                            Select Plan
                        </Button>
                    </CardFooter>

                </Card>

                <Card className="w-full p-8">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-4 rounded-none"
                    >
                        <Typography
                        variant="small"
                        color="black"
                        className="gro font-medium text-[#FF689A] text-xl"
                        >
                            Pro
                        </Typography>

                        <Typography
                        variant="h1"
                        color="black"
                        className="mt-6 mb-2 flex gap-1 text-5xl font-normal"
                        >
                            ${tabs === 'monthly' ? '320' : '550'}
                        <span className="self-end text-2xl">{tabs === 'monthly' ? '/month' : '/year'}</span>
                        </Typography>

                        <p className="gro text-xl font-medium text-black">For new creators building their list</p>

                        <Tabs value="monthly" className="mt-5">
                            <TabsHeader className="gro bg-[#F5F5F5] rounded-lg">
                                {data.map(({ label, value }) => (
                                    <Tab key={value} value={value} onClick={() => setTabs(value)}>
                                        <p className={`gro font-semibold ${tabs !== value ? "text-black" : "text-[#FF689A]"}`}>{label}</p>
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>

                    </CardHeader>

                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">Unlimited downloads per day</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">Access to all products</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">Access to new releases</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <MdCheckCircleOutline className="text-[#FF387A] text-xl" />
                                </span>
                                <Typography className="font-normal">25% renewal discount</Typography>
                            </li>
                        </ul>
                    </CardBody>

                    <CardFooter className="mt-6 p-0">
                        <Button
                        size="lg"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#FF387A]"
                        ripple={false}
                        fullWidth={true}
                        >
                            Select Plan
                        </Button>
                    </CardFooter>

                </Card>

            </div>

        </div>
    );
};

export default AccessPassSec;
