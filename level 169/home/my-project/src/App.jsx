import React from "react";

export default function FlexExamples() {
  return (
    <div>
      
      <div>
        
        <div className="flex flex-row gap-2 bg-gray-200 p-4">
          <div className="bg-blue-400 p-4 text-white">ნივთი 1</div>
          <div className="bg-blue-500 p-4 text-white">ნივთი 2</div>
          
        </div>
      </div>

      <div>
        
        <div className="flex justify-between bg-green-200 p-4">
          <div className="bg-green-400 p-4 text-white">ნივთი 1</div>
          <div className="bg-green-500 p-4 text-white">ნივთი 2</div>
          
        </div>
      </div>

      <div>
        
        <div className="flex items-center h-32 bg-red-200 p-4">
          <div className="bg-red-400 p-4 text-white">ნივთი 1</div>
          <div className="bg-red-500 p-4 text-white">ნივთი 2</div>
          
        </div>
      </div>

      

      
      
      </div>



//flex-direction – განსაზღვრავს დივის ვერტიკარულობას და ჰორიზონტარულობას: row  column 

//justify-content – ანაწილებს ელემენტებს დივში : flex-start, center, space-between, space-around

//align-items – ვერტიკალური განლაგება დივის პარალელურად: flex-start, center, flex-end, stretch


    
  );
}
