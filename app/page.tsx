import { BellRing, Home, Lock, Thermometer, Lightbulb, HelpCircle, Settings, Plus, Search, Mic, Calendar, Clock, Bluetooth, Trash2, Link, Power, Sun, Coffee, Upload, Grid, List, Headphones, Smartphone, Laptop, PlayCircle, SkipBack, SkipForward, PauseCircle, Lock as LockIcon, ChevronDown, X, MoreHorizontal, Tablet, Moon, QrCode } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="h-screen bg-[#F8F9FD] p-2 relative flex flex-col">
      <div className="flex gap-2 flex-1">
        {/* Left Sidebar */}
        <div className="w-60 bg-white/90 backdrop-blur-sm rounded-3xl p-3">
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center text-blue-500 gap-1.5 text-sm">
              <Plus size={14} />
              <span>NEW</span>
            </button>
            <button className="text-gray-400">&lt;</button>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-medium flex items-center gap-2 mb-2">
              Martine's Home
              <button className="text-gray-400 opacity-70">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17l9.2-9.2M17 17V8h-9" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </h2>
            <div className="flex items-center mt-1">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"/>
                ))}
              </div>
              <div className="ml-2 text-xs text-gray-500">+2</div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button className="text-gray-600 text-xs flex items-center gap-1">
                Limited access
                <ChevronDown size={12} />
              </button>
              <button className="text-blue-500 text-xs">+ Invite</button>
            </div>
          </div>

          <nav className="space-y-2 mb-4">
            {[
              { icon: Home, label: 'Home', active: true },
              { icon: Lock, label: 'Security', badge: 'PRO+' },
              { icon: Thermometer, label: 'Temperature' },
              { icon: Lightbulb, label: 'Lighting', info: '60%' },
              { icon: HelpCircle, label: 'Support' },
              { icon: Settings, label: 'Settings' },
            ].map((item, i) => (
              <button
                key={i}
                className={`flex items-center w-full py-2 px-3 rounded-xl gap-2 transition-all ${
                  item.active 
                    ? 'bg-blue-50 text-blue-500' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <item.icon size={16} />
                <span className="font-medium text-sm">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.info && (
                  <span className="ml-auto text-xs text-gray-400">{item.info}</span>
                )}
              </button>
            ))}
          </nav>

          {/* Device Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-gray-400">Connected devices</span>
              <button className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors">
                view all
              </button>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              <button className="p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
                  <Headphones size={14} className="text-green-600" />
                </div>
              </button>
              <button className="p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Smartphone size={14} className="text-gray-600" />
                </div>
              </button>
              <button className="p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Laptop size={14} className="text-gray-600" />
                </div>
              </button>
              <button className="p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center">
                  <LockIcon size={14} className="text-orange-500" />
                </div>
              </button>
              <button className="p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Plus size={14} className="text-blue-500" />
                </div>
              </button>
            </div>
          </div>

          {/* Music Player */}
          <div className="bg-[#8B6E5C] rounded-2xl p-3 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <LockIcon size={12} className="text-white" />
                  </div>
                  <span className="text-white text-xs font-medium">Tibet</span>
                </div>
                <button className="text-white/60 hover:text-white transition-colors">
                  <Settings size={12} />
                </button>
              </div>
              <div className="flex items-center justify-between mb-3">
                <button className="text-white/60 hover:text-white transition-colors">
                  <SkipBack size={16} />
                </button>
                <button className="text-white">
                  <PlayCircle size={24} className="drop-shadow-lg" />
                </button>
                <button className="text-white/60 hover:text-white transition-colors">
                  <SkipForward size={16} />
                </button>
              </div>
              <div>
                <div className="text-xs text-white font-medium mb-0.5">Speaker</div>
                <div className="text-[10px] text-white/60">iPhone Pro</div>
              </div>
            </div>
          </div>

          {/* App Settings */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-xs font-medium">App Settings</span>
              <button className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1">
                view all
                <span>&gt;</span>
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-[10px] text-gray-400 mb-1.5">Color Theme</div>
                <div className="flex gap-1.5">
                  <button className="flex-1 py-1.5 px-3 rounded-full bg-white shadow-sm text-[10px] text-gray-600">
                    White
                  </button>
                  <button className="flex-1 py-1.5 px-3 rounded-full bg-gray-100 text-[10px] text-gray-400">
                    Dark
                  </button>
                </div>
              </div>
              
              <div>
                <div className="text-[10px] text-gray-400 mb-1.5">App color</div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <button className="w-4 h-4 rounded-full bg-yellow-400"></button>
                    <button className="w-4 h-4 rounded-full bg-pink-400"></button>
                    <button className="w-4 h-4 rounded-full bg-blue-400"></button>
                  </div>
                  <button className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-gray-600 transition-colors ml-1.5">
                    Open editor
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* White Background Section */}
          <div className="bg-white rounded-3xl p-4 mb-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-medium text-blue-500 tracking-wider">EDIT</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[10px] text-gray-400">Updated 4 min ago</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-2xl">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M22 12C22 12 19 19 12 19C5 19 2 12 2 12" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="1" fill="currentColor"/>
                    </svg>
                    <span className="font-medium text-xs text-gray-700">Tablet_</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
                      <Search size={14} className="text-gray-400" />
                    </button>
                    <button className="hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
                      <Mic size={14} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="relative p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                  <BellRing size={16} className="text-gray-600" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full ring-1 ring-white"></span>
                </button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                  <Upload size={16} className="text-gray-600" />
                </button>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-green-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>

            {/* Room Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-gray-50/10 px-3 py-1.5 rounded-2xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="font-medium text-sm text-gray-700">Living Room</span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12" strokeLinecap="round"/>
                        <path d="M22 12C22 12 19 19 12 19C5 19 2 12 2 12" strokeLinecap="round"/>
                      </svg>
                      <span className="text-blue-500 font-medium text-xs">72%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12" strokeLinecap="round"/>
                        <path d="M22 12C22 12 19 19 12 19C5 19 2 12 2 12" strokeLinecap="round"/>
                      </svg>
                      <span className="text-orange-500 font-medium text-xs">32%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  {['Kitchen Room', 'Bed Room', 'Movie Room', 'Game Room'].map((room) => (
                    <button key={room} className="text-gray-400 hover:text-gray-600 transition-colors text-xs">
                      {room}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-xl hover:bg-gray-50/30 transition-colors">
                  <List size={16} className="text-gray-400" strokeWidth="1.5" />
                </button>
                <button className="p-1.5 rounded-xl hover:bg-gray-50/30 transition-colors">
                  <Grid size={16} className="text-gray-400" strokeWidth="1.5" />
                </button>
                <button className="p-1.5 rounded-xl hover:bg-gray-50/30 transition-colors">
                  <Plus size={16} className="text-gray-400" strokeWidth="1.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-2xl">
                <Clock size={12} className="text-blue-500" />
                <span className="text-[10px] text-gray-600">Active for 3 hours</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-400">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 8v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="7"/>
                  </svg>
                  <span>Today, 2023</span>
                </div>
                <div className="w-0.5 h-0.5 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-gray-500" strokeWidth="1.5" />
                  <span>12:30 PM</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-xl bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors">
                <svg className="w-3.5 h-3.5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </button>
              <button className="p-1.5 rounded-xl bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors">
                <Grid size={14} className="text-gray-600" strokeWidth="1.5" />
              </button>
              <button className="p-1.5 rounded-xl bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors">
                <svg className="w-3.5 h-3.5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Upload Progress */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 mb-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Upload className="text-blue-500" size={14} />
                </div>
                <span className="text-sm font-medium">Uploads device</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400">1/1</span>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-3">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-xs font-medium">Uploading...</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                    <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xs text-gray-500">10s left</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-1.5 rounded-xl hover:bg-white transition-colors">
                  <PauseCircle size={16} className="text-gray-500" strokeWidth={1.5} />
                </button>
                <button className="p-1.5 rounded-xl hover:bg-white transition-colors">
                  <Trash2 size={16} className="text-red-400" strokeWidth={1.5} />
                </button>
                <button className="p-1.5 rounded-xl hover:bg-white transition-colors">
                  <MoreHorizontal size={16} className="text-gray-500" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Bluetooth Section */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xl bg-blue-50 flex items-center justify-center">
                <Bluetooth className="text-blue-500" size={14} />
              </div>
              <span className="text-sm font-medium">Bluetooth</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Martine's</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-green-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>

          <div className="space-y-3">
            {/* Bluetooth Device Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src="/avatar.jpg" alt="Kalen" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-0.5">Kalen</h3>
                    <span className="text-xs text-gray-500">2 Devices</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-500">
                    <Clock size={12} />
                    <span className="text-xs font-medium">SET TIME</span>
                    <span className="text-xs">6:12</span>
                  </button>
                  <button className="p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                    <X size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
                      <Smartphone size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Kalen's mobile</div>
                      <div className="text-xs text-gray-500">IP Address: 102.432.467.113</div>
                    </div>
                  </div>
                  <button className="p-1.5 rounded-xl hover:bg-white transition-colors">
                    <Trash2 size={14} className="text-gray-400" />
                  </button>
                </div>
                <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
                      <Tablet size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Tablet2</div>
                      <div className="text-xs text-gray-500">IP Address: 122.352.354.111</div>
                    </div>
                  </div>
                  <button className="p-1.5 rounded-xl hover:bg-white transition-colors">
                    <Trash2 size={14} className="text-gray-400" />
                  </button>
                </div>
                <button className="w-full text-center text-sm text-blue-500 hover:text-blue-600 transition-colors py-2 flex items-center justify-center gap-1">
                  <Link size={14} />
                  Other profile
                </button>
              </div>
            </div>

            {/* Add Device Section */}
            <div className="border border-dashed border-blue-200 rounded-3xl p-6 relative bg-white/90 backdrop-blur-sm">
              <div className="absolute -top-2.5 right-6 bg-black text-white text-[10px] px-3 py-1 rounded-full flex items-center gap-1.5">
                <Headphones size={12} />
                <span>You can add your new AirPods Pro too</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Plus className="text-white" size={24} />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button className="text-blue-500 font-medium text-sm">Add device by Bluetooth</button>
                  <span className="text-xs text-gray-400">Scan nearby devices</span>
                </div>
              </div>
            </div>

            {/* Device Cards Grid */}
            <div className="grid grid-cols-4 gap-3">
              {/* QR Code Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-xl bg-purple-50 flex items-center justify-center">
                      <QrCode size={14} className="text-purple-500" />
                    </div>
                    <h3 className="text-sm font-medium">Scan QR Code</h3>
                  </div>
                  <button className="p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                    <MoreHorizontal size={14} className="text-gray-500" />
                  </button>
                </div>
                <div className="text-center">
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl flex items-center justify-center mb-3">
                    <QrCode size={100} className="text-purple-300" />
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-colors text-white text-sm font-medium rounded-xl shadow-lg shadow-purple-500/20">
                    Scan QR Code
                  </button>
                </div>
              </div>

              {/* Battery Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-xl bg-green-50 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="6" y="7" width="12" height="10" rx="2" strokeWidth="1.5"/>
                        <path d="M10 10v4M14 10v4" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M12 4v3M12 17v3" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium">Battery</h3>
                  </div>
                  <button className="p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                    <MoreHorizontal size={14} className="text-gray-500" />
                  </button>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-32">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-400 via-green-300 to-green-200 rounded-2xl" style={{ height: '31%' }}></div>
                    <div className="absolute inset-0 border-2 border-gray-200 rounded-2xl"></div>
                    <div className="absolute inset-x-0 -top-1 h-1 w-8 mx-auto bg-gray-200 rounded-t-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-medium text-gray-800">31%</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <Clock size={14} className="text-gray-400" />
                    <span>20 Hours remaining</span>
                  </div>
                </div>
              </div>

              {/* Smart Light Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium">Smart Light</h3>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                    <span className="text-xs text-gray-500">On</span>
                    <button className="p-1.5 rounded-full bg-black text-white">
                      <Power size={14} />
                    </button>
                    <button className="p-1.5 rounded-full bg-gray-200">
                      <Sun size={14} className="text-gray-500" />
                    </button>
                  </div>
                </div>
                <div className="relative mb-4">
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-gradient-to-t from-yellow-100 via-yellow-50 to-transparent opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-medium">50%</span>
                        <span className="text-sm text-gray-500 ml-1">Brightness</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-500">Schedule</span>
                    <button className="p-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors relative">
                      <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 5v14M5 12h14" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>From 12:00 AM</span>
                      <span>To 12:00 PM</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full">
                      <div className="h-full w-[70%] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Settings size={18} className="text-gray-500" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Sun size={18} className="text-gray-500" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Moon size={18} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Thermostat Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Thermometer size={14} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Thermostat</h3>
                      <span className="text-xs text-gray-500">Auto Cooling</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">On</span>
                    <button className="p-1.5 rounded-full bg-black text-white">
                      <Power size={14} />
                    </button>
                  </div>
                </div>
                <div className="relative mb-4">
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-100 to-red-100 opacity-20"></div>
                      <div className="absolute inset-4 rounded-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs text-gray-400">16°</div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-gray-400">30°</div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-4xl font-medium">24.3°</span>
                            </div>
                            <div className="absolute inset-0 rotate-[120deg]">
                              <div className="w-full h-full border-4 border-red-400 rounded-full clip-path-partial"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <button className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                      <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M8 16l4-4 4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Swing</span>
                    <span className="text-xs text-gray-400">off</span>
                  </button>
                  <button className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                      <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-green-500">Auto</span>
                    <span className="text-xs text-green-400">On</span>
                  </button>
                  <button className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                      <Clock size={14} className="text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-600">Timer</span>
                    <span className="text-xs text-gray-400">off</span>
                  </button>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">600 W</span>
                      <div className="flex items-center gap-1 text-xs text-orange-500">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Active since 2 hour ago</span>
                      </div>
                    </div>
                    <button className="text-xs text-gray-400 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      3 comments
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div className="bg-gradient-to-r from-white/30 via-white/20 to-white/30 backdrop-blur-xl border-t border-white/10 mt-auto">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium text-gray-700">73%</span>
              <div className="w-32 h-1 bg-gray-100/50 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">Air</span>
            </div>

            <div className="flex items-center gap-6 ml-12">
              <button className="p-2 rounded-xl hover:bg-white/20 transition-colors">
                <Power size={18} className="text-gray-600" />
              </button>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-10 h-5 bg-gray-200/40 backdrop-blur-sm peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                  <span className="text-sm font-medium text-gray-700">Automatic Mode</span>
                </div>
                <span className="text-[10px] text-gray-400 ml-[52px]">Save efforts of turning on/off</span>
              </div>
            </div>

            <div className="flex items-center gap-8 ml-auto">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Slow</span>
                <div className="w-32 h-1 bg-gray-100/50 rounded-full relative">
                  <div className="absolute inset-y-0 left-1/4 w-2 h-2 -mt-0.5 bg-white rounded-full shadow-sm"></div>
                  <div className="absolute inset-y-0 left-1/2 w-2 h-2 -mt-0.5 bg-white rounded-full shadow-sm"></div>
                  <div className="absolute inset-y-0 left-3/4 w-2 h-2 -mt-0.5 bg-white rounded-full shadow-sm"></div>
                </div>
                <span className="text-sm text-gray-600">Regular</span>
                <span className="text-sm text-gray-600">Max</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                  <Coffee size={18} />
                </button>
                <button className="p-2 rounded-xl bg-gray-100/30 backdrop-blur-sm text-gray-600 hover:bg-gray-100/40 transition-colors">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 3v18M3 12h18" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <button className="p-2 rounded-xl bg-gray-100/30 backdrop-blur-sm text-gray-600 hover:bg-gray-100/40 transition-colors">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
