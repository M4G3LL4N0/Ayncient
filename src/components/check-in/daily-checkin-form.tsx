"use client";

import { useState } from "react";

export default function DailyCheckinForm() {
  const [sleepHours, setSleepHours] = useState<number | null>(null);
  const [sunlight, setSunlight] = useState<boolean | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Daily Check-in</h2>
      <div className="space-y-6">
        <div>
          <label className="block mb-2">Hours of sleep last night</label>
          <input
            type="number"
            value={sleepHours ?? ""}
            onChange={(e) => setSleepHours(Number(e.target.value) || null)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Got morning sunlight?</label>
          <div className="flex gap-4">
            <button
              onClick={() => setSunlight(true)}
              className={`px-4 py-2 rounded ${sunlight === true ? "bg-green-500" : "bg-gray-200"}`}
            >
              Yes
            </button>
            <button
              onClick={() => setSunlight(false)}
              className={`px-4 py-2 rounded ${sunlight === false ? "bg-red-500" : "bg-gray-200"}`}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
