package com.ssafy.aejimeongji.domain.entity.image;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class GuideThumbnail extends Image {

    public GuideThumbnail(Image image) {
        super(image.getOriginFilename(), image.getStoreFilename());
    }

}