counter = 0

request = function()
   if (counter % 100 == 0)
   then
     path = "/blocker"
   else
     path = "/not-a-blocker"
   end

   counter = counter + 1

   return wrk.format(nil, path)
end