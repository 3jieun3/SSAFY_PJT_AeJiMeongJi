package com.ssafy.aejimeongji.domain.entity.image;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PetplaceImageSet {
    private String petplaceImage;
    private String petplaceInfo;
    private String petplaceMenu;
}
