
####################
# Near real-time Landsat image time-series analysis

#############################


require (bfastSpatial)


# Step 0: Downlaod the NDVI DATA from ESPA: http://espa.cr.usgs.gov

# Step 1: Apply could mask to NDVI 

# input path 
pth<- 'data folder'
setwd(pth) 

tarfolder<- list.files(pth, pattern=glob2rx("*tar.gz"), recursive=F)

getSceneinfo(tarfolder)
?processLandsatBatch

# temporray direciry 

rasterOptions(tmpdir = "temp folder")

# output directory
dir.create("NDVI")


processLandsatBatch(x = pth, outdir = "NDVI", untar = TRUE, mask = "cfmask", srdir = ".")


# Step 2 : get the forest mask 

# forest mask -- get from cloudless scene
plot(kafats, 6)
fm <- raster(kafats, 6)
fm[!is.na(fm)] <- 1
plot(fm)
writeRaster(fm, filename = "Forestmask", datatype = "INT2S")


### apply forest mask to the new imagery
# e.g. if you have one raster layer x, and the forest mask fm:
# and fm has value 1 for forests, and NA for non-forests, you want to delete all non-forest pixels
?mask


pth<-"/media/DATA3/prati001/27-11-2014/NDVI/"
NDVIfolder<- list.files(pth, pattern=glob2rx("*.grd"), recursive=F)
fm<- raster("forestmask.tif")

for (i in NDVIfolder){
  j<- raster(paste(pth,i, sep=''))
  
  x <- crop(j, fm)
  compareRaster(x, fm)
  xm <- mask(x = x, mask = fm)
  plot(xm, main = "masked image")
  
  Outfile<-paste("Out_forestmask/","fmak_",i)
  
  writeRaster(xm, filename = Outfile, datatype = "INT2S",overwrite=TRUE)
     
  }


### add new imagery to the existing brick and write

# rename the fmask layes
pth<-"Out_forestmask/"
fmaskfolder<- list.files(pth, pattern=glob2rx("*.grd"), recursive=F)

for (i in fmaskfolder){
  j<- raster(paste(pth,i, sep=''))
  
 ind <- unique(substr(i, nchar(i)-19, nchar(i)-4))
  outfl <- paste("Rename_forestmask/", ind, ".grd", sep="")

 writeRaster(j, outfl, datatype = "INT2S", overwrite=TRUE)

 print(ind)
}

### existing brick
kafats <- brick("kafa_p170r55_ndvi.grd")
s <- getSceneinfo(names(kafats))
s


# sort the brick by the layer names
kafats <- subset(kafats, order(names(kafats)))

writeRaster(kafats, filename = "kafa_p170r55_ndvi.grd", datatype = "INT2S",overwrite=TRUE, progress = "text")

# Step 3 : run BFAST for change detection 

# load input brick
b <- brick(kafa_p170r55_ndvi.grd)

bfm <- bfmSpatial(b, start = start, sensor = "ETM+", formula = response~harmon, order = 1, history = "all", filename = outfl, mc.cores = cores)


