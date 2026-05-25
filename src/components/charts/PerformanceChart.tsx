import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'Naive O(n²)',
    comparisons: 2500,
    label: '2.5 Trillion'
  },
  {
    name: 'Optimized O(n)',
    comparisons: 200,
    label: '200 Million'
  }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/[0.1] rounded-lg p-3 shadow-xl">
        <p className="text-white text-sm font-medium">{payload[0].payload.name}</p>
        <p className="text-purple-400 text-lg font-bold mt-1">{payload[0].payload.label} comparisons</p>
      </div>
    );
  }
  return null;
};

export const PerformanceChart = () => {
  return (
    <div className="w-full h-[200px] mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="name"
            stroke="rgba(255,255,255,0.3)"
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.3)"
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickFormatter={(value) => `${value}B`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Bar dataKey="comparisons" radius={[8, 8, 0, 0]}>
            <Cell fill="#ef4444" />
            <Cell fill="#8b5cf6" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-red-500" />
          <span className="text-neutral-500">Naive: 2.5T comparisons</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-purple-500" />
          <span className="text-neutral-500">Optimized: 200M comparisons</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold">99.996% Reduction</span>
        </div>
      </div>
    </div>
  );
};
