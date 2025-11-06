import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Switch } from "../components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Alert, AlertDescription } from "../components/ui/alert";
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell, 
  Shield, 
  Edit, 
  Trash2, 
  Plus,
  Eye,
  CheckCircle2,
  Truck,
  Clock,
  Star
} from "lucide-react";

const orderHistory = [
  {
    id: "ORD-2024-1234",
    date: "Nov 2, 2024",
    status: "Delivered",
    total: 11898,
    items: 2,
    image: "https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyMzIxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "ORD-2024-1189",
    date: "Oct 28, 2024",
    status: "In Transit",
    total: 599,
    items: 1,
    image: "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzYyMzIxMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "ORD-2024-1156",
    date: "Oct 15, 2024",
    status: "Delivered",
    total: 449,
    items: 1,
    image: "https://images.unsplash.com/flagged/photo-1553802922-5f7e9934e328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWx0fGVufDF8fHx8MTc2MjM2MzcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const wishlistItems = [
  {
    id: 1,
    name: "Silk Designer Scarf",
    price: 299,
    inStock: true,
    image: "https://images.unsplash.com/photo-1759725608258-6c02f617665b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNjYXJmfGVufDF8fHx8MTc2MjI1MTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Luxury Perfume",
    price: 399,
    inStock: true,
    image: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lfGVufDF8fHx8MTc2MjM2MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Tailored Blazer",
    price: 1899,
    inStock: false,
    image: "https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyMzIxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const savedAddresses = [
  {
    id: 1,
    type: "Home",
    name: "Alexandra Pierce",
    address: "123 Madison Avenue",
    city: "New York, NY 10016",
    phone: "+1 (555) 123-4567",
    isDefault: true,
  },
  {
    id: 2,
    type: "Office",
    name: "Alexandra Pierce",
    address: "456 Park Avenue, Suite 2000",
    city: "New York, NY 10022",
    phone: "+1 (555) 987-6543",
    isDefault: false,
  },
];

const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "4242",
    expiry: "12/25",
    isDefault: true,
  },
  {
    id: 2,
    type: "Mastercard",
    last4: "8888",
    expiry: "09/26",
    isDefault: false,
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [promotions, setPromotions] = useState(true);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "In Transit":
        return <Truck className="h-4 w-4 text-blue-600" />;
      case "Processing":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "In Transit":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Processing":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1 bg-card">
        {/* Profile Header */}
        <section className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-[#D4AF37]">
                <AvatarFallback className="bg-[#D4AF37] text-black text-2xl">
                  AP
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="font-serif text-[2.5rem] md:text-[3rem] mb-2">
                  Alexandra Pierce
                </h1>
                <p className="text-background/80 mb-4">
                  Member since October 2023 • Loyalty: Gold Tier
                </p>
                <div className="flex gap-3">
                  <Badge className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                    Gold Member
                  </Badge>
                  <Badge variant="outline" className="border-background/20 text-background">
                    50,000+ Points
                  </Badge>
                </div>
              </div>
              <Button variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-8">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none gap-2"
                >
                  <User className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="orders" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none gap-2"
                >
                  <Package className="h-4 w-4" />
                  Orders
                </TabsTrigger>
                <TabsTrigger 
                  value="wishlist" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Wishlist
                </TabsTrigger>
                <TabsTrigger 
                  value="addresses" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  Addresses
                </TabsTrigger>
                <TabsTrigger 
                  value="payment" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  Payment
                </TabsTrigger>
                <TabsTrigger 
                  value="settings" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none gap-2"
                >
                  <Shield className="h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-muted-foreground">Total Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl mb-2">24</div>
                      <p className="text-xs text-muted-foreground">
                        3 orders this month
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-muted-foreground">Total Spent</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl mb-2">$45,890</div>
                      <p className="text-xs text-muted-foreground">
                        Average: $1,912 per order
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-muted-foreground">Wishlist Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl mb-2">{wishlistItems.length}</div>
                      <p className="text-xs text-muted-foreground">
                        2 items back in stock
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Recent Orders</CardTitle>
                      <Button variant="ghost" onClick={() => setActiveTab("orders")}>
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orderHistory.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                          <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                            <ImageWithFallback
                              src={order.image}
                              alt="Order"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="truncate">{order.id}</p>
                              <Badge variant="outline" className={getStatusColor(order.status)}>
                                {getStatusIcon(order.status)}
                                <span className="ml-1">{order.status}</span>
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#D4AF37] mb-1">${order.total.toLocaleString()}</p>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Account Information */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-muted-foreground mb-2 block">Email Address</Label>
                        <p>alexandra.pierce@email.com</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground mb-2 block">Phone Number</Label>
                        <p>+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground mb-2 block">Date of Birth</Label>
                        <p>March 15, 1990</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground mb-2 block">Language</Label>
                        <p>English (US)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="mb-2">Order History</h2>
                    <p className="text-muted-foreground">View and track all your orders</p>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter orders" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="transit">In Transit</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {orderHistory.map((order) => (
                  <Card key={order.id} className="border-border">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                          <CardTitle className="mb-2">{order.id}</CardTitle>
                          <CardDescription>Placed on {order.date}</CardDescription>
                        </div>
                        <Badge variant="outline" className={getStatusColor(order.status)}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1">{order.status}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 bg-muted rounded overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={order.image}
                            alt="Order"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="mb-1">{order.items} {order.items === 1 ? "item" : "items"}</p>
                          <p className="text-[#D4AF37] text-xl">${order.total.toLocaleString()}</p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {order.status === "Delivered" && (
                          <Button variant="outline" className="flex-1">
                            <Star className="h-4 w-4 mr-2" />
                            Write Review
                          </Button>
                        )}
                        {order.status === "In Transit" && (
                          <Button variant="outline" className="flex-1">
                            <Truck className="h-4 w-4 mr-2" />
                            Track Order
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist" className="space-y-6">
                <div>
                  <h2 className="mb-2">My Wishlist</h2>
                  <p className="text-muted-foreground">Items you've saved for later</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <Card key={item.id} className="group overflow-hidden border-border">
                      <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {!item.inStock && (
                          <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                            Out of Stock
                          </Badge>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-2">{item.name}</h3>
                        <p className="text-[#D4AF37] mb-4">${item.price.toLocaleString()}</p>
                        <Button 
                          className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]"
                          disabled={!item.inStock}
                        >
                          {item.inStock ? "Add to Cart" : "Notify When Available"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses" className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="mb-2">Saved Addresses</h2>
                    <p className="text-muted-foreground">Manage your shipping addresses</p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Address
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Address</DialogTitle>
                        <DialogDescription>
                          Add a new shipping address to your account
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="address">Street Address</Label>
                          <Input id="address" placeholder="123 Main Street" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="New York" />
                          </div>
                          <div>
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input id="zip" placeholder="10001" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                          Save Address
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {savedAddresses.map((address) => (
                    <Card key={address.id} className="border-border relative">
                      {address.isDefault && (
                        <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                          Default
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-[#D4AF37]" />
                          {address.type}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-1">{address.name}</p>
                        <p className="text-sm text-muted-foreground mb-1">{address.address}</p>
                        <p className="text-sm text-muted-foreground mb-1">{address.city}</p>
                        <p className="text-sm text-muted-foreground mb-4">{address.phone}</p>
                        <Separator className="my-4" />
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Payment Tab */}
              <TabsContent value="payment" className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="mb-2">Payment Methods</h2>
                    <p className="text-muted-foreground">Manage your saved payment methods</p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Card
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Payment Method</DialogTitle>
                        <DialogDescription>
                          Add a new card to your account
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div>
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input id="cardName" placeholder="Name on card" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" type="password" />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                          Add Card
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <Alert className="border-blue-500/20 bg-blue-500/10">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-600">
                    All payment information is encrypted and securely stored. We never store your CVV.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  {paymentMethods.map((method) => (
                    <Card key={method.id} className="border-border relative">
                      {method.isDefault && (
                        <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                          Default
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-[#D4AF37]" />
                          {method.type} •••• {method.last4}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Expires {method.expiry}
                        </p>
                        <Separator className="my-4" />
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      Manage how you receive updates about your orders and account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive order updates and shipping notifications
                        </p>
                      </div>
                      <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Get text messages about your deliveries
                        </p>
                      </div>
                      <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Marketing & Promotions</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive exclusive offers and new collection updates
                        </p>
                      </div>
                      <Switch checked={promotions} onCheckedChange={setPromotions} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Privacy & Security</CardTitle>
                    <CardDescription>
                      Manage your account security and privacy settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                      <div>
                        <p className="mb-1">Password</p>
                        <p className="text-sm text-muted-foreground">••••••••</p>
                      </div>
                      <Button variant="outline">Change Password</Button>
                    </div>
                    <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                      <div>
                        <p className="mb-1">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Not enabled</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>
                      Customize your shopping experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="mb-2 block">Language</Label>
                      <Select defaultValue="en-us">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en-us">English (US)</SelectItem>
                          <SelectItem value="en-uk">English (UK)</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-2 block">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border border-red-500/20">
                  <CardHeader>
                    <CardTitle className="text-red-600">Danger Zone</CardTitle>
                    <CardDescription>
                      Irreversible actions for your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="destructive">Delete Account</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </div>
  );
}
