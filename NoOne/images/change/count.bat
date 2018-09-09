@echo off

set a=000000

setlocal EnableDelayedExpansion

for %%n in (*.jpg) do (

set /A a+=1

ren "%%n" "!a!.jpg"

)