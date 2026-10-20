import { NextRequest, NextResponse } from "next/server";
const allowed: Record<string,number>={"Residential pickup":12,"Recycling collection":9,"Business collection":35,"Bulky waste pickup":25,"Site assessment":50};
export async function POST(req:NextRequest){
 try{
  const body=await req.json(); const {service,date,time,name,email,phone,address,notes}=body;
  if(!allowed[service]||!date||!time||!name||!email||!phone||!address) return NextResponse.json({error:"Please complete all required booking fields."},{status:400});
  const pickupDate=new Date(`${date}T00:00:00`);const today=new Date();today.setHours(0,0,0,0);
  if(Number.isNaN(pickupDate.getTime())||pickupDate<today)return NextResponse.json({error:"Please choose a valid future pickup date."},{status:400});
  const secret=process.env.PAYSTACK_SECRET_KEY;if(!secret)return NextResponse.json({error:"Payment is not configured yet. Add PAYSTACK_SECRET_KEY to .env.local."},{status:503});
  const rate=Number(body.rate);if(!Number.isFinite(rate)||rate<100||rate>10000)return NextResponse.json({error:"The exchange rate is invalid. Refresh and try again."},{status:400});
  const usd=allowed[service];const amountKobo=Math.round(usd*rate*100);
  const reference=`GL-${Date.now()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
  const origin=process.env.NEXT_PUBLIC_SITE_URL||req.nextUrl.origin;
  const response=await fetch("https://api.paystack.co/transaction/initialize",{method:"POST",headers:{"Authorization":`Bearer ${secret}`,"Content-Type":"application/json"},body:JSON.stringify({email,amount:amountKobo,currency:"NGN",reference,callback_url:`${origin}/payment/return`,metadata:{custom_fields:[{display_name:"Customer name",variable_name:"customer_name",value:name},{display_name:"Service",variable_name:"service",value:service},{display_name:"Pickup date",variable_name:"pickup_date",value:date},{display_name:"Pickup window",variable_name:"pickup_time",value:time},{display_name:"Phone",variable_name:"phone",value:phone},{display_name:"Pickup address",variable_name:"address",value:address}],booking:{service,date,time,name,email,phone,address,notes,usdAmount:usd,exchangeRate:rate,amountNaira:amountKobo/100}}})});
  const data=await response.json();if(!response.ok||!data.status)return NextResponse.json({error:data.message||"Paystack could not initialize payment."},{status:502});
  return NextResponse.json({authorization_url:data.data.authorization_url,reference});
 }catch{return NextResponse.json({error:"Unable to process booking. Please try again."},{status:500});}
}